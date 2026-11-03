const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function loadTS(path) {
  const source = fs.readFileSync(path, 'utf8').replace(/^import .*;\r?\n/gm, '').replace(/image: hero\w+Img/g, "image: ''");
  const exports = {};
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, { exports, URL });
  return exports;
}
const { PRICING_PRODUCTS: pricing, PRODUCTS } = loadTS('src/constants.ts');
for (const [series, pitch, rate] of [['Corporate', 1.86, 4500], ['Retail', 2.5, 3200], ['Outdoor', 3.91, 4500]]) {
  assert.equal(pricing[series].pitch, pitch);
  assert.equal(pricing[series].ratePerSqm, rate);
  assert.equal(PRODUCTS.find(p => p.series === series).costFactor, rate);
}
const calculator = fs.readFileSync('src/components/ProductCalculator.tsx', 'utf8');
const dialog = fs.readFileSync('src/components/ConsultationDialog.tsx', 'utf8');
// Evaluate the actual estimate expressions from both consumers for all rates and presets.
const calcExpression = calculator.match(/const totalPrice = ([^;]+);/)[1];
const quoteExpression = dialog.match(/const totalEstimate = ([^;]+);/)[1];
for (const [key, expected] of [['Corporate', 91125], ['Retail', 64800], ['Outdoor', 91125]]) {
  const context = { area: 6 * 3.375, selectedProduct: pricing[key], PRICING_PRODUCTS: pricing, productKey: key };
  assert.equal(vm.runInNewContext(calcExpression, context), expected);
  assert.equal(vm.runInNewContext(quoteExpression, context), expected);
}
for (const key of Object.keys(pricing)) for (const [width, height] of [[1,1], [4.8,2.7], [9.6,5.4], [12,4], [24,12]]) {
  const context = { area: width * height, selectedProduct: pricing[key], PRICING_PRODUCTS: pricing, productKey: key };
  assert.equal(vm.runInNewContext(calcExpression, context), Math.round(width * height * pricing[key].ratePerSqm));
  assert.equal(vm.runInNewContext(quoteExpression, context), Math.round(width * height * pricing[key].ratePerSqm));
}
const { SHOWCASE_VIDEOS, videoEmbedUrl } = loadTS('src/videos.ts');
assert.equal(SHOWCASE_VIDEOS[0].url, 'https://vimeo.com/1242768365?fl=tl&fe=ec');
assert.equal(SHOWCASE_VIDEOS[1].url, 'https://vimeo.com/reviews/4dfadf41-e3a1-4742-95e2-b0d8d771d075/videos/1242769122');
for (const input of ['', 'bad', 'https://example.com/watch?v=abcdefghijk', 'javascript:alert(1)', 'https://youtube.com/watch?v=short', 'https://vimeo.com/not-a-video']) assert.equal(videoEmbedUrl(input), null);
for (const input of ['https://youtu.be/abcdefghijk', 'https://www.youtube.com/watch?v=abcdefghijk', 'https://youtube.com/shorts/abcdefghijk']) assert.equal(videoEmbedUrl(input), 'https://www.youtube-nocookie.com/embed/abcdefghijk');
assert.equal(videoEmbedUrl('https://www.youtube-nocookie.com/embed/abcdefghijk'), 'https://www.youtube-nocookie.com/embed/abcdefghijk');
assert.equal(videoEmbedUrl('https://vimeo.com/123456789'), 'https://player.vimeo.com/video/123456789');
assert.equal(videoEmbedUrl('https://player.vimeo.com/video/123456789?h=private123'), 'https://player.vimeo.com/video/123456789?h=private123');
assert.equal(videoEmbedUrl(SHOWCASE_VIDEOS[0].url), 'https://player.vimeo.com/video/1242768365');
assert.equal(videoEmbedUrl(SHOWCASE_VIDEOS[1].url), null);
const html = fs.readFileSync('index.html','utf8');
assert.ok(html.includes('<title>Professional LED Screen Supplier &amp; Installation in Malaysia</title>'));
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema['@type'], 'Organization');
assert.equal(schema.email, 'daniel6688@sglled.com');
assert.equal(schema.telephone, '+60104257824');
assert.equal(schema.address.streetAddress, '26 Jalan Airport City 2, Kota Warisan');
assert.equal(schema.address.addressLocality, 'Bandar Baru Salak Tinggi');
assert.equal(schema.address.postalCode, '43900');
assert.equal(schema.employee.name, 'Daniel T');
assert.equal(schema.employee.jobTitle, 'Managing Director');
assert.equal((html.match(/property="og:image:alt"/g) || []).length, 1);
const company = loadTS('src/company.ts');
assert.equal(company.COMPANY.email, 'daniel6688@sglled.com');
assert.equal(company.COMPANY.phoneLink, '+60104257824');
assert.equal(company.COMPANY_ADDRESS, '26 Jalan Airport City 2, Kota Warisan, 43900 Bandar Baru Salak Tinggi, Selangor, Malaysia');
assert.ok(company.COMPANY_MAP_EMBED_URL.includes(encodeURIComponent(company.COMPANY_ADDRESS)));
assert.ok(company.COMPANY_WHATSAPP_URL.startsWith('https://wa.me/60104257824?'));
const footer = fs.readFileSync('src/components/Footer.tsx','utf8');
const app = fs.readFileSync('src/App.tsx','utf8');
const quote = fs.readFileSync('src/components/ConsultationDialog.tsx','utf8');
const industries = fs.readFileSync('src/components/IndustriesSection.tsx','utf8');
const tech = fs.readFileSync('src/components/TechUSPSection.tsx','utf8');
const banner = fs.readFileSync('src/components/LeadCaptureBanner.tsx','utf8');
const constants = fs.readFileSync('src/constants.ts','utf8');
const faq = fs.readFileSync('src/components/FaqSection.tsx','utf8');
const calculatorSource = fs.readFileSync('src/components/ProductCalculator.tsx','utf8');
for (const source of [footer, app, quote, industries, tech, banner, constants, faq, calculatorSource]) {
  assert.ok(!source.includes('lengzaiiteng98@gmail.com'));
  assert.ok(!source.includes('Persiaran Pegaga'));
  assert.ok(!source.includes('Menara Petronas'));
  assert.ok(!source.includes('48-hour'));
  assert.ok(!source.includes('24-month local'));
  assert.ok(!source.includes('Kuala Lumpur HQ'));
}
assert.ok(footer.includes('COMPANY_ADDRESS'));
assert.ok(footer.includes('COMPANY_MAP_EMBED_URL'));
assert.ok(quote.includes('mailto:${COMPANY.email}'));
assert.ok(industries.includes('maintenance support'));
assert.ok(tech.includes('installs, and maintains'));
const sitemap = fs.readFileSync('public/sitemap.xml','utf8');
assert.ok(!sitemap.includes('#'));
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]), ['https://sglled.com/']);
assert.ok(fs.readFileSync('public/robots.txt','utf8').includes('Sitemap: https://sglled.com/sitemap.xml'));
console.log('PASS: pricing, both calculator expressions, presets, video URL validation, SEO/schema, sitemap and robots.');
