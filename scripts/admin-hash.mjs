import {scryptSync,randomBytes} from 'node:crypto';
import {createInterface} from 'node:readline';
if(!process.stdin.isTTY){console.error('Run interactively. Never pass a password as a command argument.');process.exit(1);}
const rl=createInterface({input:process.stdin,output:process.stdout});
rl.question('Owner password (input visible on your own terminal): ',password=>{if(password.length<14){console.error('Use at least 14 characters.');process.exitCode=1;}else{const salt=randomBytes(16).toString('hex');console.log('scrypt$'+salt+'$'+scryptSync(password,salt,64).toString('hex'));}rl.close();});
