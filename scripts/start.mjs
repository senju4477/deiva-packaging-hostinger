import {spawn} from 'node:child_process';
const child=spawn(process.execPath,['.next/standalone/server.js'],{stdio:'inherit',env:{...process.env,HOSTNAME:'0.0.0.0',PORT:process.env.PORT||'3000'}});
for(const s of ['SIGINT','SIGTERM'])process.on(s,()=>child.kill(s));
child.on('exit',(c)=>process.exit(c??1));
