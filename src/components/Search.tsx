import useDebounce from "@/hooks/useDebounce";
import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchBar;

export const useSearchBar = (
  opts = { placeholder: "Search", delay: 250 }
): { query: string; searchBarProps: SearchBarProps } => {
  const { placeholder, delay } = opts;
  const [value, setValue] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");
  useDebounce(() => setDebouncedValue(value), delay, [value]);

  return {
    query: debouncedValue,
    searchBarProps: {
      value,
      setValue,
      placeholder,
    },
  };
};

function sentenceToWords(sentence: string): string[] {
  return sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove all non-word characters except spaces
    .split(/\s+/)
    .filter(Boolean);
}

function addSearchTerms<T extends object>(
  items: T[],
  includedFields: Array<keyof T>
) {
  return items.map((item) => {
    const searchTermsSet = new Set();
    includedFields.forEach((field) => {
      const words = sentenceToWords(String(item[field]));
      words.forEach((word) => searchTermsSet.add(word));
    });
    const searchTerms = [...searchTermsSet].join(" ");
    return { ...item, searchTerms };
  });
}

// note: doesnt work if items and includedFields are changed after 1st render
export function useItemFilterSearchBar<T extends object>(
  items: T[],
  includedFields: Array<keyof T>,
  opts = { placeholder: "Search", delay: 100 }
): { items: T[]; searchBarProps: SearchBarProps } {
  const searchableItems = React.useMemo(() => {
    return addSearchTerms(items, includedFields);
  }, []);

  const { query, searchBarProps } = useSearchBar(opts);

  const filteredItems = React.useMemo(() => {
    const queryWords = sentenceToWords(query);
    return searchableItems.filter((item) => {
      let match = true;
      // item search terms must include all words in query
      queryWords.forEach((queryWord) => {
        if (!item.searchTerms.includes(queryWord)) {
          match = false;
        }
      });
      return match;
    });
  }, [query]);

  return { items: filteredItems, searchBarProps };
}
