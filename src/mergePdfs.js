const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

/**
 * Merge multiple PDF files into a single PDF document.
 *
 * @param {string[]} inputPaths - Absolute or relative paths to input PDF files.
 * @param {string} outputPath - Absolute or relative path for the merged PDF file.
 * @returns {Promise<void>}
 */
async function mergePdfs(inputPaths, outputPath) {
  if (!Array.isArray(inputPaths) || inputPaths.length === 0) {
    throw new Error('inputPaths must be a non-empty array of PDF file paths.');
  }

  if (!outputPath || typeof outputPath !== 'string') {
    throw new Error('outputPath must be a valid file path.');
  }

  for (const inputPath of inputPaths) {
    if (!inputPath || typeof inputPath !== 'string') {
      throw new Error('Each input path must be a valid file path.');
    }

    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file not found: ${inputPath}`);
    }
  }

  const mergedPdf = await PDFDocument.create();

  for (const inputPath of inputPaths) {
    // Read each source PDF and copy all of its pages into the output document.
    const fileBuffer = fs.readFileSync(inputPath);
    const sourcePdf = await PDFDocument.load(fileBuffer);
    const pageIndices = sourcePdf.getPageIndices();
    const copiedPages = await mergedPdf.copyPages(sourcePdf, pageIndices);

    for (const page of copiedPages) {
      mergedPdf.addPage(page);
    }
  }

  const outputDirectory = path.dirname(outputPath);
  fs.mkdirSync(outputDirectory, { recursive: true });

  const mergedPdfBytes = await mergedPdf.save();
  fs.writeFileSync(outputPath, mergedPdfBytes);
}

module.exports = mergePdfs;
