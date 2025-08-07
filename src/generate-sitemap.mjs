import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Define your site’s pages here
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/products', changefreq: 'daily', priority: 0.9 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.sigmasand.in' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemapStream).then(() => {
  console.log('✅ Sitemap successfully generated: /public/sitemap.xml');
});

sitemapStream.pipe(writeStream);
links.forEach(link => sitemapStream.write(link));
sitemapStream.end();
