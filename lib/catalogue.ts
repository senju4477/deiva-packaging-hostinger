import 'server-only';
import {rows} from './db';
import {commerceMode} from './config';
import {demoProducts} from './demo';
import type {Product,Variant} from './types';
export async function catalogue():Promise<Product[]>{if(commerceMode()==='demo')return demoProducts;const ps=await rows('SELECT * FROM products WHERE active=1 AND preview=0 ORDER BY name LIMIT 2000');const vs=await rows('SELECT * FROM variants WHERE active=1 ORDER BY product_id, units');return ps.map(p=>({id:p.id,slug:p.slug,name:p.name,category:p.category,material:p.material,capacity:p.capacity,dimensions:p.dimensions,colour:p.colour,description:p.description,image:p.image_url,compatibleIds:typeof p.compatible_ids==='string'?JSON.parse(p.compatible_ids):p.compatible_ids||[],preview:false,variants:vs.filter(v=>v.product_id===p.id).map(v=>({id:v.id,sku:v.sku,label:v.label,units:Number(v.units),minimum:Number(v.minimum),increment:Number(v.increment),priceCents:v.price_cents==null?null:Number(v.price_cents),stock:v.stock==null?null:Math.max(0,Number(v.stock)-Number(v.reserved)),active:!!v.active} as Variant))}));}

export async function publicCategories(){if(commerceMode()==='demo')return (await import('./demo')).categories;return (await rows('SELECT slug,name,description,image_url FROM categories WHERE active=1 ORDER BY name')).map(c=>({slug:c.slug,name:c.name,description:c.description,image:c.image_url}));}
