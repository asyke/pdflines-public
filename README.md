# PDFLines Public

Public technical examples and educational materials related to PDFLines.

This repository currently contains a minimal Node.js example showing how to merge multiple PDF files using `pdf-lib`.

## What this repository is

- This repo is for public technical examples and educational materials related to PDFLines
- Does not contain production code
- Does not expose private implementation details
- Intended for transparency and educational use

## Included example

The current example demonstrates:

- Loading multiple local PDF files
- Merging their pages into one output PDF
- Writing the merged result to disk
- A simple local Node.js file-processing flow

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

```bash
npm install
```

## Add sample files

- `samples/sample-1.pdf`
- `samples/sample-2.pdf`

## Run

```bash
npm start
```

## Expected output

```text
output/merged.pdf
```

## Notes

- This is an educational example only.
- It does not include production queueing, storage, rate limiting, or SaaS-specific logic.
- The script expects valid PDF files in the sample paths before running.
- The `output/` folder is ignored by Git.

## Website

PDFLines: https://www.pdflines.com
