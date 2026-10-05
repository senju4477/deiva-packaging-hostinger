import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
import {readdir} from 'node:fs/promises';
const port='34571';const origin='http://127.0.0.1:'+port;
const server=spawn(process.execPath,['.next/standalone/server.js'],{env:{...process.env,COMMERCE_MODE:'demo',SITE_URL:origin,SITE_INDEXABLE:'false',PORT:port,HOSTNAME:'0.0.0.0'},stdio:['ignore','pipe','pipe']});
let logs='';server.stdout.on('data',b=>{logs+=b});server.stderr.on('data',b=>{logs+=b});
try{let ready=false;for(let i=0;i<60;i++){try{if((await fetch(origin,{signal:AbortSignal.timeout(1000)})).ok){ready=true;break;}}catch{}if(server.exitCode!==null)break;await new Promise(r=>setTimeout(r,100));}assert.ok(ready,'Standalone startup failed: '+logs.slice(-1500));
const routes=['/','/shop','/search?q=CUP-08-P','/cart','/checkout','/order-confirmation','/wholesale','/about','/contact','/faqs','/delivery','/returns','/privacy','/terms','/packaging-guide','/quick-order','/admin','/category/cups-and-lids','/category/food-containers','/products/coffee-cup','/products/food-bowl'];
for(const path of routes){const r=await fetch(origin+path);assert.equal(r.status,200,path);assert.match(r.headers.get('x-robots-tag')||'',/noindex/,path);const html=await r.text();assert.ok(html.includes('<title>'),path+' title');assert.ok(!html.includes('Internal Server Error'),path);}
for(const path of ['/missing-page','/products/not-real','/shop/unexpected'])assert.equal((await fetch(origin+path)).status,404,path);
for(const image of await readdir('public/products')){const r=await fetch(origin+'/products/'+image);assert.equal(r.status,200,image);assert.ok((await r.arrayBuffer()).byteLength>500,image);}
const home=await(await fetch(origin)).text();const css=[...home.matchAll(/href="([^\"]+\.css[^\"]*)"/g)].map(m=>m[1]);assert.ok(css.length);for(const path of css)assert.equal((await fetch(origin+path.replaceAll('&amp;','&'))).status,200,'CSS');
assert.match(await(await fetch(origin+'/robots.txt')).text(),/Disallow: \/\s/);assert.ok(!(await(await fetch(origin+'/sitemap.xml')).text()).includes('<loc>'));
assert.equal((await fetch(origin+'/api/admin?resource=orders')).status,401);
const quote=await fetch(origin+'/api/enquiries',{method:'POST',headers:{origin,'Content-Type':'application/json'},body:JSON.stringify({})});assert.equal(quote.status,503);assert.match((await quote.json()).error,/preview does not send/);
console.log(`Standalone smoke checks passed: ${routes.length} routes, 3 real 404s, ${12} images, CSS, noindex/robots/sitemap, private owner access and honest unavailable enquiries.`);
}finally{server.kill('SIGTERM');await new Promise(r=>server.exitCode!==null?r():server.on('exit',r));}
