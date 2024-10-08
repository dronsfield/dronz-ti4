// @ts-nocheck
import axios from "axios";
const { JSDOM } = require("jsdom");

import {
  convertNameToId,
  convertNameToScrapePath,
  factionNames,
} from "@/lib/factions";

import * as fs from "fs";

import { loadEnvConfig } from "@next/env";
import { promiseSequence } from "@/util/promiseSequence";
import { downloadWebpage } from "./common";
import { createId } from "@/lib/createId";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// can be used in chrome console too
async function getObjectives() {
  ///
  ///
  ///
  const url = `${process.env.SCRAPE_URL}/Exploration`;

  const response = await axios.get(url);
  const html = response.data;
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const parserOutputDiv = document.querySelector("div.mw-parser-output");

  const clone = parserOutputDiv!.cloneNode(true);

  let items = [];

  let cardType = "";

  function cleanText(text?: string) {
    if (!text) return "";
    console.log(text);
    return text.replace(/\\n/g, "").trim();
  }

  // const CODEX_STRING = `Ω Update (Codex III): `;

  function parseTable(table: HTMLTableElement) {
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length) {
        const item = {
          name: cleanText(cells[0]?.textContent),
          quantity: cardType === "relic" ? 1 : cleanText(cells[1]?.textContent),
          effect: cleanText(cells[cells.length - 1]?.textContent),
          cardType,
        };
        items.push(item);
        // if (item.name.startsWith(CODEX_STRING)) {
        //   items[items.length - 1].condition = item.name.replace(
        //     CODEX_STRING,
        //     ""
        //   );
        // } else {
        //   items.push(item);
        // }
      }
    });
  }

  [...clone.children].forEach((el) => {
    if (el.localName === "table" && el.classList.contains("article-table")) {
      parseTable(el);
    }

    if (el.localName === "h3") {
      if (el.textContent.startsWith("Cultural Exploration Cards")) {
        cardType = "cultural";
      }
      if (el.textContent.startsWith("Industrial Exploration Cards")) {
        cardType = "industrial";
      }
      if (el.textContent.startsWith("Hazardous Exploration Cards")) {
        cardType = "hazardous";
      }
      if (el.textContent.startsWith("Frontier Cards")) {
        cardType = "frontier";
      }
    }

    if (el.localName === "h2") {
      if (el.textContent.startsWith("Relic Fragments and Relics")) {
        cardType = "relic";
      }
    }
  });

  items = items.map((item) => {
    return { ...item, id: createId(item.name) };
  });

  console.log(items);

  fs.writeFileSync(
    "src/data/explore.json",
    JSON.stringify(items, null, 2),
    "utf8"
  );
}

getObjectives();
