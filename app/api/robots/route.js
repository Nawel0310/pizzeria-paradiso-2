// app/api/robots/route.js
export async function GET(req) {

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  
  return new Response(`
    User-agent: *
    Allow: /

    Sitemap: ${BASE_URL}/sitemaps.xml
  `, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
