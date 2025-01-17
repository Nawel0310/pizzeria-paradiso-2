import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET() {
  const routes = [
    { path: '', changefreq: 'monthly', priority: 1.0 },
    { path: '#heroSection', changefreq: 'monthly', priority: 1.0 },
    { path: '#aboutUsSection', changefreq: 'monthly', priority: 0.8 },
    { path: '#especialidadesSection', changefreq: 'monthly', priority: 0.8 },
    { path: '#testimoniosSection', changefreq: 'monthly', priority: 0.8 },
    { path: '#contactoSection', changefreq: 'monthly', priority: 0.8 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${BASE_URL}/${route.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
