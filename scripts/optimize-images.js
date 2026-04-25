/**
 * Converts all JPG/JPEG/PNG images in public/images/ to WebP.
 * Run with: npm run optimize-images
 * Skips files that already have a .webp counterpart.
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const INPUT_DIR = join(fileURLToPath(import.meta.url), '../../public/images');
const QUALITY = 85;
const MAX_WIDTH = 2400;

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(fullPath);
    else yield fullPath;
  }
}

async function main() {
  let totalOriginalBytes = 0;
  let totalNewBytes = 0;
  let processedCount = 0;
  let skippedCount = 0;

  for await (const filePath of walkDir(INPUT_DIR)) {
    const ext = extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    try {
      await stat(outPath);
      skippedCount++;
      continue;
    } catch { /* file doesn't exist, proceed with optimization */ }

    const originalSize = (await stat(filePath)).size;
    try {
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);

      const newSize = (await stat(outPath)).size;
      totalOriginalBytes += originalSize;
      totalNewBytes += newSize;
      processedCount++;

      const savingPct = ((1 - newSize / originalSize) * 100).toFixed(0);
      console.log(
        `  ${basename(filePath)} -> .webp  ` +
        `${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB  (-${savingPct}%)`
      );
    } catch (err) {
      console.error(`  FAILED ${basename(filePath)}: ${err.message}`);
    }
  }

  if (processedCount > 0) {
    const totalSaving = ((1 - totalNewBytes / totalOriginalBytes) * 100).toFixed(0);
    console.log(`\nProcessed: ${processedCount} images`);
    console.log(`Skipped:   ${skippedCount} (webp already exists)`);
    console.log(
      `Total:     ${(totalOriginalBytes / 1024 / 1024).toFixed(1)}MB -> ` +
      `${(totalNewBytes / 1024 / 1024).toFixed(1)}MB  (-${totalSaving}%)`
    );
  } else {
    console.log(`All images already optimized (${skippedCount} skipped)`);
  }
}

main().catch(console.error);
