import * as fs from "fs";
import * as path from "path";

type Item = {
  type: string;
  name: string;
  suffix: string;
  reqs: string[];
  info: string[];
  id: string;
  source: string;
};

const initialiseItem = () => {
  return {
    type: "",
    name: "",
    suffix: "",
    reqs: [],
    info: [],
    id: "",
    source: "",
  } as Item;
};

// Function to process the file
function processFile(filePath: string) {
  try {
    // Read the entire file content
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Split file content into lines
    const lines = fileContent.split(/\r?\n/);

    let currentItem = initialiseItem();
    let currentItemSection = 0;

    const items: Item[] = [];

    const processLine = (line: string) => {
      try {
        if (currentItemSection === 0) {
          const regex = /:([^:]+):([^:]+)(?::([^:]+))*/;
          const match = line.match(regex);
          if (match) {
            currentItem.type = match[1];
            currentItem.name = match[2];
            currentItem.suffix = match[3];
            currentItemSection = 1;
          } else {
            throw new Error(`section 0 regex didn't match for "${line}"`);
          }
        } else if (currentItemSection === 1) {
          const regex = /Requirements:\s*((?::([^:]+):)+|None)/;
          const match = line.match(regex);
          if (match) {
            if (line.includes("None")) {
              currentItem.reqs = [];
            } else {
              // const params = line.match(/(:[^:]+:)/g); // Matches each `:parameter:`
              // // ?.map((param) => param.slice(1, -1)); // Removes the colons
              const params = line
                .replace("Requirements: ", "")
                .split(":")
                .filter(Boolean);
              if (!params) {
                throw new Error(`unexpected reqs for "${line}"`);
              }
              currentItem.reqs = params || [];
            }
            currentItemSection = 2;
          } else {
            throw new Error(`section 1 regex didn't match for "${line}"`);
          }
        } else if (currentItemSection === 2) {
          if (line.startsWith("ID:")) {
            currentItemSection = 3;
            processLine(line);
          } else {
            const omegaIndex = line.indexOf("Omega: ");
            if (omegaIndex !== -1) {
              currentItem.info.push(line.slice(omegaIndex + 7));
            } else {
              currentItem.info.push(line);
            }
          }
        } else if (currentItemSection === 3) {
          const regex = /ID:\s*([^\s]+)\s+Source:\s*([^\s]+)/;
          const match = line.match(regex);
          if (match) {
            currentItem.id = match[1];
            currentItem.source = match[2];
            items.push(currentItem);
            currentItem = initialiseItem();
            currentItemSection = 0;
          } else {
            throw new Error(`section 3 regex didn't match for "${line}"`);
          }
        } else {
          throw new Error(`currentItemSection should never get beyond 3...`);
        }
      } catch (error) {
        console.log("currentItem", currentItem);
        throw error;
      }
    };

    // Iterate through lines
    for (const line of lines) {
      processLine(line);
    }

    return items;
  } catch (error) {
    console.error("Error reading the file:", error);
  }
}

// Run the script
const filePath = path.resolve("./src/data/tech/from_discord.txt"); // Change this to your text file path
const items = processFile(filePath);

console.log(items);
fs.writeFileSync(
  `src/data/tech/parsed.json`,
  JSON.stringify(items, null, 2),
  "utf8"
);
