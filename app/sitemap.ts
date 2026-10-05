import type {MetadataRoute} from 'next';
import {catalogue,publicCategories} from '../lib/catalogue';
import {siteUrl,commerceMode} from '../lib/config';
export const dynamic='force-dynamic';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{if(process.env.SITE_INDEXABLE!=='true'||commerceMode()==='demo')return [];try{const [products,categories]=await Promise.all([catalogue(),publicCategories()]);return ['','/shop','/about','/contact','/wholesale','/faqs','/delivery','/returns','/privacy','/terms','/packaging-guide',...categories.map(c=>'/category/'+c.slug),...products.filter(p=>!p.preview).map(p=>'/products/'+p.slug)].map(path=>({url:siteUrl()+path}));}catch{return [];}}
