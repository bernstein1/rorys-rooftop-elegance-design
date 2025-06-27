import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const siteUrl = process.env.SITE_URL;
if (!siteUrl) {
  console.error('Set the SITE_URL environment variable before building');
  process.exit(1);
}

const templatePath = join(__dirname, '..', 'public', 'sitemap.template.xml');
const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');

const template = readFileSync(templatePath, 'utf8');
const output = template.replace(/\{\{SITE_URL\}\}/g, siteUrl.replace(/\/$/, ''));

writeFileSync(outputPath, output);
console.log(`Sitemap updated with domain ${siteUrl}`);

