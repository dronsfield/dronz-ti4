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

export function cleanFactionPage() {
  ///
  ///
  ///

  const parserOutputDiv = document.querySelector("div.mw-parser-output");

  if (parserOutputDiv) {
    const clone = parserOutputDiv.cloneNode(true);

    clone.querySelectorAll("img").forEach((el) => {
      if (el.dataset.imageKey.startsWith("Ti_icons")) {
        const newImg = document.createElement("img");
        newImg.src = "/" + el.dataset.imageKey.replace("png", "webp");
        el.parentNode.replaceChild(newImg, el);
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
      anchor.parentNode.replaceChild(span, anchor); // Replace <a> with <span>
    });
    clone.querySelectorAll("*").forEach((element) => {
      element.removeAttribute("class");
      element.removeAttribute("style");
      element.removeAttribute("colspan");
    });

    const removeComments = (node) => {
      if (node.nodeType === Node.COMMENT_NODE) {
        node.remove();
      } else {
        node.childNodes.forEach(removeComments);
      }
    };
    removeComments(clone);

    const modifiedInnerHTML = clone.innerHTML;

    console.log(modifiedInnerHTML);
  } else {
    console.log('Div with class "mw-parser-output" not found.');
  }
  ///
  ///
  ///
  //
}
