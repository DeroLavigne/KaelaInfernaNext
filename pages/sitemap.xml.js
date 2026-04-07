import pageData from '../page-data.json';

function generateSiteMap(data) {
  const today = new Date().toISOString().split('T')[0];
  const urls = [`  <url><loc>https://kaelainferna.com/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`];

  for (const [section, slugs] of Object.entries(data)) {
    for (const slug of slugs) {
      urls.push(`  <url><loc>https://kaelainferna.com/${section}/${slug}/</loc><lastmod>${today}</lastmod><priority>0.75</priority></url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(pageData);
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
