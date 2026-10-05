import 'server-only';
import type {PublicConfig} from './types';
export function commerceMode():'demo'|'test'|'live'{const m=process.env.COMMERCE_MODE||'demo';if(m!=='demo'&&m!=='test'&&m!=='live')throw new Error('Invalid COMMERCE_MODE.');return m;}
export const dbConfigured=()=>['DB_HOST','DB_USER','DB_PASSWORD','DB_NAME'].every(k=>Boolean(process.env[k]));
export function siteUrl(){const url=new URL(process.env.SITE_URL||'http://localhost:3000');if(!['http:','https:'].includes(url.protocol))throw new Error('SITE_URL must be HTTP or HTTPS.');return url.origin;}
export function publicConfig():PublicConfig{const mode=commerceMode();return {mode,quoteAvailable:mode!=='demo'&&dbConfigured(),paymentAvailable:mode!=='demo'&&dbConfigured()&&Boolean(process.env.STRIPE_SECRET_KEY&&process.env.STRIPE_WEBHOOK_SECRET&&process.env.DELIVERY_RULES_JSON&&process.env.GST_RATE_BPS),businessEmail:process.env.BUSINESS_EMAIL||'',businessPhone:process.env.BUSINESS_PHONE||''};}
