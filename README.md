# PDFLines Public

Public technical examples and developer-facing materials related to PDFLines.

This repository currently contains a minimal Node.js example showing how to merge multiple PDF files using `pdf-lib`.

## What this repository is

- A public examples and materials repository maintained by PDFLines
- Intended for transparency and educational use
- Does not contain production code
- Does not expose private implementation details

## Included example

The current example demonstrates:

- Loading multiple local PDF files
- Copying pages into a merged output document
- Writing the merged result to disk
- A simple local file-processing flow in Node.js

## Tech stack

- Node.js
- CommonJS modules
- pdf-lib

## Project structure

```text
pdflines-public/
  src/
    mergePdfs.js
    index.js
  samples/
    .gitkeep
  output/
    .gitkeep
  .gitignore
  LICENSE
  package.json
  README.md
```

## Setup

Install dependencies:

```bash
npm install
```

## Add sample files

Add two PDF files to the `samples/` directory:

- `samples/sample-1.pdf`
- `samples/sample-2.pdf`

## Run

```bash
npm start
```

## Expected output

After the script runs successfully, the merged file will be written to:

```text
output/merged.pdf
```

## Notes

- This is an educational example only.
- It does not include production queueing, storage, rate limiting, or SaaS-specific logic.
- The script expects valid PDF files at the sample paths before running.
- The `output/` folder is ignored by Git, so generated files are not committed.

## Website

PDFLines: https://www.pdflines.com
