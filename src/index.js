const path = require('path');
const mergePdfs = require('./mergePdfs');

async function main() {
  const inputPaths = [
    path.resolve(__dirname, '..', 'samples', 'sample-1.pdf'),
    path.resolve(__dirname, '..', 'samples', 'sample-2.pdf')
  ];
  const outputPath = path.resolve(__dirname, '..', 'output', 'merged.pdf');

  console.log('Merging sample PDF files...');
  await mergePdfs(inputPaths, outputPath);
  console.log(`Merged PDF created at: ${outputPath}`);
}

main().catch((error) => {
  console.error('Failed to merge PDF files.');
  console.error(error.message);
  process.exit(1);
});
