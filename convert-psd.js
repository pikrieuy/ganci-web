import fs from 'fs';
import { readPsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image } from 'canvas';
import { encode } from 'fast-png';

try {
  initializeCanvas(createCanvas, Image);
  const buffer = fs.readFileSync('Untitled_Artwork.psd');
  const psd = readPsd(buffer, { skipLayerImageData: true, skipThumbnail: true });
  
  if (psd.canvas) {
    const pngBuffer = psd.canvas.toBuffer('image/png');
    fs.writeFileSync('public/logo.png', pngBuffer);
    console.log("Successfully converted PSD to public/logo.png via canvas");
  } else if (psd.imageData) {
    const pngData = encode({
      width: psd.width,
      height: psd.height,
      data: psd.imageData,
      channels: psd.channels || 4,
      depth: 8
    });
    fs.writeFileSync('public/logo.png', pngData);
    console.log("Successfully converted PSD to public/logo.png via encode");
  } else {
    console.log("No image data found in PSD.");
  }
} catch (e) {
  console.error("Error converting PSD:", e);
}
