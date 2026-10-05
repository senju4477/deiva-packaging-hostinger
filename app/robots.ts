import type {MetadataRoute} from 'next';
import {siteUrl,commerceMode} from '../lib/config';
export default function robots():MetadataRoute.Robots{return process.env.SITE_INDEXABLE==='true'&&commerceMode()!=='demo'?{rules:{userAgent:'*',allow:'/',disallow:['/admin','/api/','/cart','/checkout','/order-confirmation','/search']},sitemap:siteUrl()+'/sitemap.xml'}:{rules:{userAgent:'*',disallow:'/'}};}
