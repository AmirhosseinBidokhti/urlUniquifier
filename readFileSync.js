import fs from "fs";

export const readFileByLine = (path) => {
  try {
    const data = fs.readFileSync(path, "utf-8");

    const lines = data.split("\n");

    return lines;
  } catch (err) {
    throw new Error(`Error reading the file: ${err}`);
  }
};
