const fs = require('fs');
const util = require('util');
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

const writeToFileAsync = util.promisify(fs.writeFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  writeToFileAsync(destination, JSON.stringify(content, null, 4));
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  return readFromFile(file, 'utf8').then((data) => {
    const parsedData = JSON.parse(data);
    parsedData.push(content);
    return writeToFile(file, parsedData);
  });
};
module.exports = { readFromFile, writeToFile, readAndAppend };