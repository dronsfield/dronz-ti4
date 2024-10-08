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
  const url = `${process.env.SCRAPE_URL}/Objectives`;

  const response = await axios.get(url);
  const html = response.data;
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const parserOutputDiv = document.querySelector("div.mw-parser-output");

  const clone = parserOutputDiv!.cloneNode(true);

  let items = [];

  let objType: "po" | "so" = "po";
  let phase: string = "";

  function cleanText(text?: string) {
    if (!text) return "";
    return text.replace(/\\n/g, "").trim();
  }

  const CODEX_STRING = `Ω Update (Codex III): `;

  function parseTable(table: HTMLTableElement) {
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length) {
        const item = {
          name: cleanText(cells[0]?.textContent),
          condition: cleanText(cells[1]?.textContent),
          value: cleanText(cells[2]?.textContent),
          objType,
          phase,
        };
        if (item.name.startsWith(CODEX_STRING)) {
          items[items.length - 1].condition = item.name.replace(
            CODEX_STRING,
            ""
          );
        } else {
          items.push(item);
        }
      }
    });
  }

  [...clone.children].forEach((el) => {
    // console.log(el.localName);

    if (el.localName === "table" && el.classList.contains("article-table")) {
      parseTable(el);
    }

    if (el.localName === "h2") {
      if (el.textContent.startsWith("Public Objectives")) {
        objType = "po";
      }
      if (el.textContent.startsWith("Secret Objectives")) {
        objType = "so";
      }
    }

    if (el.localName === "h3" && objType === "so") {
      if (el.textContent.startsWith("Action Phase")) {
        phase = "action";
      }
      if (el.textContent.startsWith("Status Phase")) {
        phase = "status";
      }
      if (el.textContent.startsWith("Agenda Phase")) {
        phase = "agenda";
      }
    }
  });

  items = items.map((item) => {
    return { ...item, id: createId(item.name) };
  });

  console.log(items);

  fs.writeFileSync(
    "src/data/obj/obj.json",
    JSON.stringify(items, null, 2),
    "utf8"
  );
}

getObjectives();
