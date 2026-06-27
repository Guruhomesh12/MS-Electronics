import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ files: [] });
    }

    const files = fs.readdirSync(galleryDir);
    
    const mediaFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp4', '.webm'].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        return {
          name: file,
          url: `/gallery/${file}`,
          type: ['.mp4', '.webm'].includes(ext) ? 'video' : 'image',
          category: 'All' // Could be enhanced by subfolder parsing later
        };
      });

    return NextResponse.json({ files: mediaFiles });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 });
  }
}
