import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const downloadsDir = path.join(process.cwd(), 'public', 'downloads');
    
    if (!fs.existsSync(downloadsDir)) {
      return NextResponse.json({ files: [] });
    }

    const files = fs.readdirSync(downloadsDir);
    
    const docFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip'].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        const stat = fs.statSync(path.join(downloadsDir, file));
        
        let type = 'Document';
        if (ext === '.pdf') type = 'PDF';
        else if (ext === '.zip') type = 'Archive';
        
        return {
          name: file,
          url: `/downloads/${file}`,
          type: type,
          size: (stat.size / (1024 * 1024)).toFixed(2) + ' MB',
          date: stat.mtime.toISOString().split('T')[0]
        };
      });

    return NextResponse.json({ files: docFiles });
  } catch (error) {
    console.error('Error reading downloads directory:', error);
    return NextResponse.json({ error: 'Failed to load downloads' }, { status: 500 });
  }
}
