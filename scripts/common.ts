// @ts-nocheck
import axios from "axios";
const { JSDOM } = require("jsdom");

export const downloadWebpage = async (
  url: string,
  outputFile: string,
  modifier: (doc: Document) => Node
) => {
  console.log(`Downloading ${url} to ${outputFile}`);
  try {
    const response = await axios.get(url);
    const html = response.data;
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const modified = modifier(document);
    const modifiedHtml = modified.innerHTML;
    fs.writeFileSync(outputFile, modifiedHtml, "utf8");
    console.log(`Modified HTML saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error downloading the webpage ${url}: ${error}`);
  }
};
