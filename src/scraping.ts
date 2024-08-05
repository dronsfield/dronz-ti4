// @ts-nocheck
"use client";

export function removeLinks(htmlText: string): string {
  // Regex to match <a> tags and capture their contents, including across multiple lines
  const pattern = /<a\s+[^>]*>(.*?)<\/a>/gis;

  // Replace <a> tags with their contents
  let cleanedText = htmlText.replace(pattern, "$1");

  // Remove all newline characters
  cleanedText = cleanedText.replace(/\n/g, "");

  return cleanedText;
}

if (typeof window !== "undefined") {
  (window as any).rl = removeLinks;
}
