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
  const url = `${process.env.SCRAPE_URL}/Agenda_Cards`;

  const response = await axios.get(url);
  const html = response.data;
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const parserOutputDiv = document.querySelector("div.mw-parser-output");

  const clone = parserOutputDiv!.cloneNode(true);

  let items = [];

  let removedAgendas = [];

  let agendaType = "";
  let introducedInPok = false;

  function cleanText(text?: string) {
    if (!text) return "";
    return text.replace(/\\n/g, "").trim();
  }

  // const CODEX_STRING = `Ω Update (Codex III): `;

  function parseTable(table: HTMLTableElement) {
    table.querySelectorAll("tr").forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length > 1) {
        const item = {
          name: cleanText(cells[0]?.textContent),
          elect: cleanText(cells[cells.length - 2]?.textContent),
          effect: cleanText(cells[cells.length - 1]?.textContent),
          agendaType:
            cells.length === 4
              ? cleanText(cells[1]?.textContent).toLowerCase()
              : agendaType,
          introducedInPok,
        };
        items.push(item);
      } else if (items.length) {
        items[items.length - 1].effect =
          items[items.length - 1].effect +
          "\n" +
          cleanText(cells[0]?.textContent);
      }
    });
  }

  function parseList(ul: HTMLUListElement) {
    ul.querySelectorAll("li").forEach((li) => {
      removedAgendas.push(cleanText(li?.textContent));
    });
  }

  let isTraversingRemovedList = false;
  [...clone.children].forEach((el) => {
    if (el.localName === "table" && el.classList.contains("article-table")) {
      parseTable(el);
    }

    if (el.localName === "ul" && isTraversingRemovedList) {
      parseList(el);
      return;
    }

    if (el.localName === "h3") {
      if (el.textContent.startsWith("New Agendas")) {
        agendaType = "";
        introducedInPok = true;
      }
      if (el.textContent.startsWith("Removed Agendas")) {
        isTraversingRemovedList = true;
      }
    }

    if (el.localName === "h2") {
      if (el.textContent.startsWith("Laws")) {
        agendaType = "law";
      }
      if (el.textContent.startsWith("Directive")) {
        agendaType = "directive";
      }
    }
  });

  items = items.map((item) => {
    return {
      ...item,
      effect: item.effect.replace("\n\n", "\n"),
      elect: item.elect === "-" ? "" : item.elect,
      id: createId(item.name),
      removedInPok: Boolean(removedAgendas.find((name) => name === item.name)),
    };
  });

  fs.writeFileSync(
    "src/data/agenda.json",
    JSON.stringify(items, null, 2),
    "utf8"
  );
}

getObjectives();
