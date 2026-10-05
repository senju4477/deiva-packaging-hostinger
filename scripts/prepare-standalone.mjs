import {cp, mkdir, access} from 'node:fs/promises';
await access('.next/standalone/server.js');
await mkdir('.next/standalone/.next',{recursive:true});
await cp('.next/static','.next/standalone/.next/static',{recursive:true,force:true});
try {await access('public');await cp('public','.next/standalone/public',{recursive:true,force:true});} catch(e){if(e.code!=='ENOENT')throw e;}
console.log('Standalone server and public assets prepared.');
