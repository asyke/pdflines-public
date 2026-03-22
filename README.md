# PDFLines Public

Public technical examples and developer-facing materials related to PDFLines.

This repository currently contains a minimal Node.js example showing how to merge multiple PDF files using `pdf-lib`.

## What this repository is

- A public technical example repository
- Maintained by PDFLines
- Does not contain production code
- Intended for transparency and educational use

## Included example

This repository currently includes:

- A Node.js PDF merge example
- Multiple input PDFs
- A merged output file
- A simple file-processing flow

## Tech stack

- Node.js
- pdf-lib

## Project structure

```text
pdflines-public/
  src/
    index.js
    mergePdfs.js
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

Place these files in the `samples/` directory:

- `samples/sample-1.pdf`
- `samples/sample-2.pdf`

## Run

```bash
npm start
```

## Expected output

The merged file will be written to:

```text
output/merged.pdf
```

## Notes

- This is an educational example.
- It does not include production PDFLines infrastructure or private implementation details.

## Website

PDFLines: https://www.pdflines.com
