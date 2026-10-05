import type {Product,Category} from './types';
import {referenceProducts} from './reference-products';
import {categoryProducts} from './category-products';
export const categories:Category[] = [
{slug:'cups-and-lids',name:'Cups & lids',description:'Coffee cups, cold cups and compatible lids.',image:'/products/packware/ripple-cup-brown-8oz.webp'},
{slug:'food-containers',name:'Food containers',description:'Bowls, containers and matching closures.',image:'/products/packware/ribbed-container-1000.webp'},
{slug:'boxes-and-trays',name:'Boxes & trays',description:'Takeaway, bakery and catering packaging.',image:'/products/packware/large-kraft-window-catering-tray.webp'},
{slug:'bags',name:'Bags',description:'Carry bags and practical takeaway packaging.',image:'/products/packware/die-cut-kraft-bag.webp'},
{slug:'tableware',name:'Tableware',description:'Cutlery, napkins and serving essentials.',image:'/products/packware/wooden-fork-160.webp'},
{slug:'straws-and-accessories',name:'Straws & accessories',description:'Beverage accessories and serving supplies.',image:'/products/packware/pulp-cup-holder-four.webp'},
{slug:'bottles',name:'Bottles',description:'Bottles and suitable closures.',image:'/products/packware/square-pet-bottle-250.webp'},
{slug:'kitchen-consumables',name:'Kitchen consumables',description:'Foil, wraps and preparation supplies.',image:'/products/packware/cling-wrap-33x600.webp'},
{slug:'cleaning-and-hygiene',name:'Cleaning & hygiene',description:'Gloves and everyday hygiene essentials.',image:'/products/packware/compact-interleaved-hand-towels.webp'},
{slug:'verified-materials',name:'Material information',description:'Ask for verified recycling or compostability details.',image:'/products/paper-bag.webp'}];
const rows = [
['coffee-cup','Kraft coffee cup','cups-and-lids','Paper','240 mL (8 oz)','To be confirmed','Kraft','A practical cup format for hot drinks. Confirm the lining, suitability and lid fit before ordering.','coffee-lid',100,1000,'CUP-08'],
['coffee-lid','Coffee cup lid','cups-and-lids','Plastic','8 oz cup format','To be confirmed','Black','A coffee lid example for the matching cup format. Compatibility is illustrative until the supplier specifications are confirmed.','coffee-cup',100,1000,'LID-08'],
['cold-cup','Clear cold drink cup','cups-and-lids','Plastic','360 mL (12 oz)','To be confirmed','Clear','A clear cup example for cold drinks. Ask for the confirmed material, lid options and intended use.','',50,1000,'COLD-12'],
['food-bowl','Kraft food bowl','food-containers','Paper','750 mL','To be confirmed','Kraft','A round bowl format for takeaway meals. Confirm heat tolerance, lining and suitable lids with your quote.','bowl-lid',50,500,'BOWL-750'],
['bowl-lid','Clear bowl lid','food-containers','Plastic','750 mL bowl format','To be confirmed','Clear','An illustrative closure for the matching bowl. Final compatibility must be checked against approved supplier data.','food-bowl',50,500,'BLID-750'],
['meal-box','Kraft takeaway meal box','boxes-and-trays','Paper','Medium format','To be confirmed','Kraft','A folded meal-box format for takeaway food. Dimensions and food suitability are to be confirmed.','',50,500,'BOX-M'],
['pizza-box','Kraft pizza box','boxes-and-trays','Cardboard','Large format','To be confirmed','Kraft','An unprinted pizza-box example. Request the required dimensions and carton quantity in your enquiry.','',50,200,'PIZZA-L'],
['paper-bag','Kraft carry bag','bags','Paper','Medium format','To be confirmed','Kraft','A carry-bag example with handles for takeaway or retail orders. Confirm load capacity and dimensions before purchase.','',50,250,'BAG-M'],
['cutlery','Wooden cutlery set','tableware','Wood','Fork, knife & spoon','To be confirmed','Natural','An illustrative cutlery set for meals and catering. Confirm the set contents, packaging and material information.','',100,1000,'CUT-SET'],
['napkins','White paper napkins','tableware','Paper','Folded format','To be confirmed','White','A napkin format for front-of-house service. Ask for the confirmed ply, unfolded dimensions and pack quantity.','',250,2000,'NAP-W'],
['foil','Aluminium foil roll','kitchen-consumables','Aluminium','Catering roll','To be confirmed','Silver','A catering foil example for kitchen preparation. Confirm the width, length and intended food contact use.','',1,6,'FOIL-R'],
['gloves','Nitrile glove box','cleaning-and-hygiene','Nitrile','Medium size example','To be confirmed','Blue','A glove-box example for hygiene tasks. Confirm size, certification and suitability for your intended use.','',100,1000,'GLOVE-M']
] as const;
const illustrativeProducts:Product[] = rows.map((r)=>({id:r[0],slug:r[0],name:r[1],category:r[2],material:r[3],capacity:r[4],dimensions:r[5],colour:r[6],description:r[7],image:'/products/'+r[0]+'.webp',compatibleIds:r[8]?[r[8]]:[],preview:true,variants:[{id:r[0]+'-pack',sku:r[11]+'-P',label:'Pack',units:r[9],minimum:1,increment:1,priceCents:null,stock:null,active:true},{id:r[0]+'-carton',sku:r[11]+'-C',label:'Carton',units:r[10],minimum:1,increment:1,priceCents:null,stock:null,active:true}]}));

export const demoProducts:Product[] = [...illustrativeProducts,...referenceProducts,...categoryProducts];
