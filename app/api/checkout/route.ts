import {createCheckout} from '../../../lib/commerce';
import {body,failure,rateLimit,sameOrigin} from '../../../lib/security';
import {checkoutSchema} from '../../../lib/validation';
export const runtime='nodejs';
export async function POST(request:Request){try{sameOrigin(request);const data=checkoutSchema.parse(await body(request));await rateLimit(request,'checkout',5);return Response.json(await createCheckout(data));}catch(e){return failure(e);}}
