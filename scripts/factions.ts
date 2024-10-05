// @ts-nocheck

import axios from "axios";
// import { JSDOM } from "jsdom";
const { JSDOM } = require("jsdom");
import * as fs from "fs";

// can be used in chrome console too
function cleanFactionPage(document: Document) {
  ///
  ///
  ///
  const parserOutputDiv = document.querySelector("div.mw-parser-output");

  const clone = parserOutputDiv!.cloneNode(true);

  clone.querySelectorAll("img").forEach((el) => {
    if (el.dataset.imageKey?.startsWith("Ti_icons")) {
      const newImg = document.createElement("img");
      newImg.src = "/" + el.dataset.imageKey.replace("png", "webp");
      el.parentNode?.replaceChild(newImg, el);
    } else {
      el.remove();
    }
  });
  clone.querySelectorAll("svg").forEach((el) => el.remove());
  // clone.querySelectorAll("br").forEach((el) => el.remove());
  clone.querySelectorAll("figure").forEach((el) => el.remove());
  clone.querySelectorAll("div#incontent_player").forEach((el) => el.remove());
  clone.querySelectorAll("div#toc").forEach((el) => el.remove());
  clone.querySelectorAll("div#gallery-0").forEach((el) => el.remove());
  clone
    .querySelectorAll("table:not(.article-table)")
    .forEach((el) => el.remove());
  clone.querySelectorAll("a").forEach((anchor) => {
    const span = document.createElement("span"); // Create a new <span> element
    span.innerHTML = anchor.innerHTML; // Copy the innerHTML from <a> to <span>
    anchor.parentNode?.replaceChild(span, anchor); // Replace <a> with <span>
  });
  clone.querySelectorAll("*").forEach((element) => {
    element.removeAttribute("class");
    element.removeAttribute("style");
    element.removeAttribute("colspan");
  });

  const removeComments = (node: HTMLElement) => {
    if (node.nodeType === 8) {
      node.remove();
    } else {
      node.childNodes.forEach(removeComments);
    }
  };
  removeComments(clone);

  return clone;
  ///
  ///
  ///
}

const downloadWebpage = async (
  url: string,
  outputFile: string,
  modifier: (doc: Document) => Node
) => {
  try {
    // Download the webpage
    const response = await axios.get(url);
    const html = response.data;

    // Create a JSDOM instance to use querySelectorAll
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const modified = modifier(document);

    const modifiedHtml = modified.innerHTML;

    // Save the modified HTML to a file
    fs.writeFileSync(outputFile, modifiedHtml, "utf8");
    console.log(`Modified HTML saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error downloading the webpage: ${error}`);
  }
};

// Replace with the desired URL and output file name
const url = "https://twilight-imperium.fandom.com/wiki/The_Empyrean"; // Change this to your target URL
const outputFile = "src/data/the_empyrean_lol.html";

downloadWebpage(url, outputFile, cleanFactionPage);
