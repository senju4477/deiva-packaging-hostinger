export type Variant = {id:string;sku:string;label:string;units:number;minimum:number;increment:number;priceCents:number|null;stock:number|null;active:boolean};
export type Product = {id:string;slug:string;name:string;category:string;material:string;capacity:string;dimensions:string;colour:string;description:string;image:string;compatibleIds:string[];variants:Variant[];preview:boolean;environmentalNote?:string;reference?:{retailer:string;url:string;note?:string}};
export type CartLine = {variantId:string;quantity:number};
export type Category = {slug:string;name:string;description:string;image:string};
export type PublicConfig = {mode:'demo'|'test'|'live';quoteAvailable:boolean;paymentAvailable:boolean;businessEmail:string;businessPhone:string;catalogueUnavailable?:boolean};
