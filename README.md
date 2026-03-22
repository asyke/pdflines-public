# PDFLines

PDFLines is a PDF-focused project that publishes public technical examples and developer-facing reference materials.

Website: https://www.pdflines.com

This repository contains public technical examples intended for educational use and basic implementation reference. It does not include production infrastructure or private implementation details.

## Examples

Currently included:

- `examples/pdf-merge-worker/`: a minimal Node.js example that merges multiple PDF files into a single document using `pdf-lib`

To run the example:

```bash
cd examples/pdf-merge-worker
npm install
npm start
```

The example expects these local input files:

- `examples/pdf-merge-worker/samples/sample-1.pdf`
- `examples/pdf-merge-worker/samples/sample-2.pdf`

It writes the merged result to:

```text
examples/pdf-merge-worker/output/merged.pdf
```

## License

This repository is available under the MIT License. See `LICENSE` for details.
