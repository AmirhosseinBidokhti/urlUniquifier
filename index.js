import { URL } from "url";
import { readFileByLine } from "./readFileSync.js";
import { URLExtractor } from "./urlExtractor.js";

const urls = readFileByLine(process.argv[2]);

const uniqueURLs = new Map();

urls.map((URL) => {
  let { paramKeys, domainPath } = URLExtractor(URL);

  // If the url has no query parameter
  // Just check the domain and path
  if (paramKeys.length === 0) {
    if (!uniqueURLs.has(URL)) {
      //uniqueURLs.push(URL);
      uniqueURLs.set(URL, URL);
    }
    return;
  }

  // Here is evaluted when url has query params
  // Extract the query params and make a string with domain and path
  // Check if exist or no in our unique map
  paramKeys = paramKeys.sort().join("&");

  let urlWithParams = domainPath + "?" + paramKeys;

  if (uniqueURLs.has(urlWithParams) === false) {
    uniqueURLs.set(urlWithParams, URL);
  }
});

for (const [key, value] of uniqueURLs.entries()) {
  console.log(value);
}
