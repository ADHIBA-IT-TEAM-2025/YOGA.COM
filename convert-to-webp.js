// convert-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 👈 Your images root folder
const inputDir = path.resolve('./public/IMAGE');

function convertImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Process subfolders (completed, upcoming, etc.)
      convertImages(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const outputPath = path.join(dir, path.basename(file, ext) + '.webp');

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => {
            console.log(`✅ Converted: ${fullPath} → ${outputPath}`);
            // Delete original file after conversion
            fs.unlinkSync(fullPath);
            console.log(`🗑️ Removed old file: ${fullPath}`);
          })
          .catch(err => console.error('❌ Error:', err));
      }
    }
  });
}

// Start conversion
convertImages(inputDir);
