import 'server-only';
import mysql,{type Pool,type PoolConnection,type RowDataPacket,type ResultSetHeader} from 'mysql2/promise';
let pool:Pool|undefined;
export function database(){if(!pool){const {DB_HOST,DB_USER,DB_PASSWORD,DB_NAME}=process.env;if(!DB_HOST||!DB_USER||!DB_PASSWORD||!DB_NAME)throw new Error('Database is not configured.');pool=mysql.createPool({host:DB_HOST,port:Number(process.env.DB_PORT||3306),user:DB_USER,password:DB_PASSWORD,database:DB_NAME,connectionLimit:5,maxIdle:3,idleTimeout:60000,waitForConnections:true,queueLimit:20,connectTimeout:5000,charset:'utf8mb4',timezone:'Z',supportBigNumbers:true,bigNumberStrings:false,multipleStatements:false,...(process.env.DB_SSL==='true'?{ssl:{rejectUnauthorized:true}}:{})});}return pool;}
export async function rows<T extends RowDataPacket=RowDataPacket>(sql:string,params:(string|number|boolean|Date|null|Buffer)[]=[],connection?:PoolConnection){const [result]=await (connection||database()).execute<T[]>(sql,params);return result;}
export async function run(sql:string,params:(string|number|boolean|Date|null|Buffer)[]=[],connection?:PoolConnection){const [result]=await(connection||database()).execute<ResultSetHeader>(sql,params);return result;}
export async function transaction<T>(fn:(c:PoolConnection)=>Promise<T>){const c=await database().getConnection();try{await c.beginTransaction();const result=await fn(c);await c.commit();return result;}catch(e){await c.rollback();throw e;}finally{c.release();}}
export async function closeDatabase(){await pool?.end();pool=undefined;}
