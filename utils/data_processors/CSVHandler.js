import * as csv from 'fast-csv'
import fs from 'fs'

/**
 * Module for parsing CSV test data.
 * @module CSVHandler
 */

export class CSVHandler {
  /**
   * Parses the passed CSV file and outputs an array of objects.
   *
   * @async
   * @param {string} filePath - The path to the file for processing.
   * @param {string} [delimiter=','] - The delimiter used in the CSV file.
   * @returns {Promise<Object[]>} Promise that resolves with the CSV data parsed into an array of objects.
   * @throws {Error} If there is an error reading the CSV file.
   * @example
   * const data = await CSVHandler.parseCsvFile('path/to/file.csv');
   * console.log(data);
   */
  static async parseCsvFile(filePath, delimiter = ',') {
    return new Promise((resolve, reject) => {
      const parsedData = []
      fs.createReadStream(filePath)
        .pipe(
          csv.parse({
            headers: true,
            discardUnmappedColumns: true,
            delimiter: delimiter,
            trim: true,
            ignoreEmpty: true,
            quote: '"'
          })
        )
        .on('error', error => {
          console.error(`Error reading CSV file: ${error.message}`)
          reject(error)
        })
        .on('data', row => {
          parsedData.push(row)
        })
        .on('end', () => {
          resolve(parsedData)
        })
    })
  }
}
