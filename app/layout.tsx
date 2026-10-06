import type {Metadata} from 'next';
import './globals.css';
import {siteUrl} from '../lib/config';
export const metadata:Metadata={metadataBase:new URL(siteUrl()),title:{default:'Deiva Packaging | Melbourne Packaging Supplies',template:'%s | Deiva Packaging'},description:'Browse packaging formats, compare pack and carton quantities, and prepare a business quote with Deiva Packaging in Melbourne.',alternates:{canonical:'/'},icons:{icon:{url:'/favicon-512.png',type:'image/png',sizes:'512x512'}},robots:process.env.SITE_INDEXABLE==='true'?{index:true,follow:true}:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-AU"><body>{children}</body></html>;}
