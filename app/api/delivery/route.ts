import {deliveryOptions} from '../../../lib/validation';
import {failure,HttpError} from '../../../lib/security';
export async function GET(request:Request){try{const postcode=new URL(request.url).searchParams.get('postcode')||'';if(!/^\d{4}$/.test(postcode))throw new HttpError(400,'Enter a four-digit Australian postcode.');const options=deliveryOptions(postcode);return Response.json({options,freightQuoteRequired:options.length===0});}catch(e){return failure(e);}}
