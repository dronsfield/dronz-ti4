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
  const url = `${process.env.SCRAPE_URL}/Action_Cards`;

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
    return text.replace(/\\n/g, "").trim();
  }

  function parseTable(table: HTMLTableElement) {
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length) {
        const item = {
          name: cleanText(cells[0]?.textContent),
          quantity: cleanText(cells[1]?.textContent),
          play: cleanText(cells[2]?.textContent),
          effect: cleanText(cells[3]?.textContent),
          flavor: cleanText(cells[4]?.textContent),
        };
        items.push(item);
      }
    });
  }

  [...clone.children].forEach((el) => {
    if (el.localName === "table" && el.classList.contains("article-table")) {
      parseTable(el);
    }
  });

  items = items.map((item) => {
    return { ...item, id: createId(item.name) };
  });

  fs.writeFileSync("src/data/ac.json", JSON.stringify(items, null, 2), "utf8");
}

getObjectives();
