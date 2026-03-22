# pdf-merge-worker-example

Minimal Node.js example for merging PDF files with `pdf-lib`.

## What this project shows

This project demonstrates basic PDF merge processing in Node.js. It reads multiple PDF files from a local folder, combines all pages into a single document, and writes the merged result to disk.

## Tech stack

- Node.js
- CommonJS modules
- [`pdf-lib`](https://www.npmjs.com/package/pdf-lib)

## Project structure

```text
pdf-merge-worker-example/
  src/
    mergePdfs.js
    index.js
  samples/
    .gitkeep
  output/
    .gitkeep
  .gitignore
  LICENSE
  README.md
  package.json
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

Start the example:

```bash
npm start
```

## Expected result

After the script runs successfully, the merged file will be written to:

```text
output/merged.pdf
```

## Notes

- This is a minimal local example and does not include production queueing, storage, or SaaS-specific logic.
- The script expects valid PDF files at the sample paths before you run it.
- The `output/` folder is ignored by Git, so generated files are not committed by default.

Maintained by the creator of PDFLines: https://www.pdflines.com
