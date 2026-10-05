import type {Product} from './types';

type ReferenceSpec = {
  id:string; name:string; handle:string; category:string; material:string;
  capacity:string; dimensions:string; colour:string; description:string;
  note?:string; compatibleIds?:string[];
  variants:{sku:string;label:string;units:number}[];
};

// Reference formats from the user-selected Packware Top Sellers collection.
// All are preview-only: no Deiva price, stock or supply claim is inferred.
const specs:ReferenceSpec[] = [
  {
    id:'ribbed-container-lid',name:'Genfac ribbed container lid',handle:'rectangle-plastic-container-lids-fits-500ml-1500ml-genfac',
    category:'food-containers',material:'Plastic',capacity:'500–1,500 mL ribbed container format',dimensions:'184 × 125 × 7.5 mm',colour:'Clear',
    description:'A rectangular lid format listed for Genfac ribbed containers from 500 mL to 1,500 mL. Match it with the 1,000 mL ribbed container shown here; lids are ordered separately.',
    compatibleIds:['ribbed-container-1000','ribbed-container-750','ribbed-container-500'],
    variants:[{sku:'GF-LIRR-50',label:'Sleeve',units:50},{sku:'GF-LIRR',label:'Carton',units:500}]
  },
  {
    id:'g-range-container-lid',name:'Genfac G-range container lid',handle:'rectangular-lids-to-suit-g-range-containers-500ml-1000ml-genfac',
    category:'food-containers',material:'Plastic',capacity:'500–1,000 mL G-range container format',dimensions:'178 × 123 × 7.5 mm',colour:'Natural',
    description:'A rectangular lid for Genfac G-range containers from 500 mL to 1,000 mL. This is a different fit from the ribbed container lid; confirm the container code before ordering.',
    variants:[{sku:'GF-LIG-50',label:'Pack',units:50},{sku:'GF-LIG',label:'Carton',units:500}]
  },
  {
    id:'white-drinking-cup-200',name:'White drinking cup · 200 mL',handle:'200ml-white-drinking-cups-durable-bpa-free-disposable',
    category:'cups-and-lids',material:'Plastic',capacity:'200 mL',dimensions:'72 mm diameter × 80 mm high',colour:'White',
    description:'A small white cup format for water and drink service. The reference range offers sleeves of 50 or cartons of 1,000.',
    variants:[{sku:'GF-CW200-50',label:'Sleeve',units:50},{sku:'GF-CW200',label:'Carton',units:1000}]
  },
  {
    id:'ribbed-container-1000',name:'Genfac ribbed food container · 1,000 mL',handle:'ribbed-rectangle-plastic-containers-natural-1000ml-genfac-bpa-free-qty-500',
    category:'food-containers',material:'Plastic',capacity:'1,000 mL',dimensions:'184 × 125 × 68 mm',colour:'Natural',
    description:'A rectangular ribbed container format for meal preparation and takeaway food. The matching ribbed lid is sold separately. Confirm food and temperature suitability with Deiva before supply.',
    compatibleIds:['ribbed-container-lid'],
    variants:[{sku:'GF-1000RR-50',label:'Sleeve',units:50},{sku:'GF-1000RR',label:'Carton',units:500}]
  },
  {
    id:'twist-handle-bag-large',name:'Large paper bag with twist handles',handle:'large-paper-twist-handle-bag-305x305x175-uber-eats-size-qty-250',
    category:'bags',material:'Paper',capacity:'Large carry bag',dimensions:'305 × 305 × 175 mm',colour:'Brown',
    description:'A broad-base paper carry bag with twisted handles for takeaway and retail orders. The reference listing shows 100 gsm paper and a quantity of 250 bags.',
    variants:[{sku:'HMK-CBBL',label:'Carton',units:250}]
  },
  {
    id:'greaseproof-bag-square',name:'Brown square greaseproof bag',handle:'1-square-greaseproof-lined-bag-brown-180x180mm',
    category:'bags',material:'Paper',capacity:'Square snack bag',dimensions:'180 × 180 mm',colour:'Brown',
    description:'A square paper bag with a greaseproof lining for snack and bakery formats. The reference pack contains 500 bags.',
    variants:[{sku:'PP-BBS1GP',label:'Pack',units:500}]
  },
  {
    id:'greaseproof-bag-half-square',name:'Brown half-square greaseproof bag',handle:'1-2-square-greaseproof-lined-bag-brown-145x140mm',
    category:'bags',material:'Paper',capacity:'Half-square snack bag',dimensions:'145 × 140 mm',colour:'Brown',
    description:'A smaller greaseproof-lined paper bag for snack portions and takeaway service. The reference carton contains 500 bags.',
    variants:[{sku:'PP-BBS1/2GP',label:'Carton',units:500}]
  },
  {
    id:'natural-cocktail-napkins',name:'Natural 2-ply cocktail napkins',handle:'2-ply-corner-embossed-cocktail-napkin-fsc-mix',
    category:'tableware',material:'Paper',capacity:'2-ply cocktail format',dimensions:'240 × 240 mm',colour:'Natural',
    description:'Corner-embossed cocktail napkins in natural paper. The reference carton contains 2,000 napkins, arranged as eight inner packs of 250.',
    variants:[{sku:'BP-GNCOK',label:'Carton',units:2000}]
  },
  {
    id:'single-wall-cup-4oz',name:'White single-wall paper cup · 4 oz',handle:'4oz-single-wall-cups-plain-white',
    category:'cups-and-lids',material:'PE-coated paper',capacity:'118 mL (4 oz)',dimensions:'62 × 45 × 60 mm',colour:'White',
    description:'A small plain-white paper cup with a single wall and polyethylene lining. Available reference formats are sleeves of 50 and cartons of 1,000. Lid fit requires confirmation.',
    variants:[{sku:'PT-4SWC-50',label:'Sleeve',units:50},{sku:'PT-4SWC',label:'Carton',units:1000}]
  },
  {
    id:'white-reusable-fork',name:'White heavy-duty fork',handle:'white-reusable-heavy-duty-fork',
    category:'tableware',material:'Plastic',capacity:'Fork',dimensions:'178 mm long',colour:'White',
    description:'A white plastic fork format for meal and event service. The current variant selector lists packs of 40 and cartons of 960.',
    note:'The source uses both reusable and single-use descriptions. Confirm intended reuse, dishwasher suitability and disposal instructions before ordering.',
    variants:[{sku:'PTW-JU4001',label:'Pack',units:40},{sku:'PTW-JU4001-CTN',label:'Carton',units:960}]
  },
  {
    id:'freezer-bag-200x250',name:'Freezer bags · 200 × 250 mm',handle:'freezer-bags-200x250',
    category:'bags',material:'Plastic',capacity:'Freezer bag',dimensions:'200 × 250 mm',colour:'Clear',
    description:'A plastic freezer-bag format for portioning and storage. The reference pack contains 1,000 bags. Confirm temperature limits and intended food use before supply.',
    variants:[{sku:'HMK-FB225',label:'Pack',units:1000}]
  },
  {
    id:'gold-rim-dinner-plate',name:'White dinner plate with gold rim',handle:'260mm-heavy-duty-white-dinner-plate',
    category:'tableware',material:'To be confirmed',capacity:'260 mm dinner plate',dimensions:'260 mm diameter',colour:'White / gold',
    description:'A white dinner plate with a gold border for event table settings. The current variant selector lists six plates per pack and 144 per carton.',
    note:'The selector lists 144 plates per carton, while the description also lists 24. Confirm the carton total and material before ordering.',
    variants:[{sku:'PTW-PRG106',label:'Pack',units:6},{sku:'PTW-PRG106-CTN',label:'Carton',units:144}]
  },
  {
    id:'dark-blue-gingham-paper',name:'Dark blue gingham greaseproof paper',handle:'gingham-dark-blue-greaseproof-paper',
    category:'kitchen-consumables',material:'Paper',capacity:'200-sheet ream',dimensions:'Sheet size to be confirmed',colour:'Dark blue / white',
    description:'Dark blue gingham paper for wrapping and lining serving formats. The reference listing describes 40 gsm paper in reams of 200 sheets.',
    note:'The source lists both 190 × 310 mm and 190 × 300 mm sheet sizes. Confirm the required size before ordering.',
    variants:[{sku:'PT-GPGBD',label:'Ream',units:200}]
  },
  {
    id:'blue-gingham-paper',name:'Blue gingham greaseproof paper',handle:'greaseproof-paper-gingham-blue-190-x-300mm-200-ream',
    category:'kitchen-consumables',material:'Paper',capacity:'200-sheet ream',dimensions:'Sheet size to be confirmed',colour:'Blue / white',
    description:'Blue gingham wrapping and liner sheets, listed as 40 gsm paper in reams of 200. Confirm the dimensions for your serving format.',
    note:'The title lists 190 × 300 mm, while the specification also lists 190 × 130 mm. Confirm the sheet size before ordering.',
    variants:[{sku:'PT-GPGBLUE(Pack)',label:'Ream',units:200}]
  },
  {
    id:'natural-hdpe-bottle-5l',name:'Natural square HDPE bottle · 5 L',handle:'5-litre-hdpe-plastic-natural-square-bottle-38mm-tamper-evident-lids',
    category:'bottles',material:'HDPE',capacity:'5 L',dimensions:'38 mm closure; bottle dimensions to confirm',colour:'Natural bottle · black or red lid',
    description:'A square natural HDPE bottle format with a 38 mm tamper-evident lid. The reference options offer black or red lids and quantities of 10, 25 or 50 bottles.',
    variants:[
      {sku:'QBM-5LHDPEB10',label:'Pack of 10 · black lid',units:10},
      {sku:'QBM-5LHDPER10',label:'Pack of 10 · red lid',units:10},
      {sku:'QBM-5LHDPEB25',label:'Pack of 25 · black lid',units:25},
      {sku:'QBM-5LHDPER25',label:'Pack of 25 · red lid',units:25},
      {sku:'QBM-5LHDPEB50',label:'Pack of 50 · black lid',units:50},
      {sku:'QBM-5LHDPER50',label:'Pack of 50 · red lid',units:50}
    ]
  },
  {
    id:'white-tablecover-rectangle',name:'White rectangular table cover',handle:'rectangle-white-plastic-tablecover',
    category:'tableware',material:'Plastic',capacity:'Rectangular table cover',dimensions:'137 × 274 cm',colour:'White',
    description:'A white plastic table cover format for events and catering. The reference pack contains one rectangular cover.',
    variants:[{sku:'HQ-TBW',label:'Pack',units:1}]
  }
];

export const referenceProducts:Product[] = specs.map(s=>({
  id:s.id,slug:s.id,name:s.name,category:s.category,material:s.material,
  capacity:s.capacity,dimensions:s.dimensions,colour:s.colour,description:s.description,
  image:'/products/packware/'+s.id+'.webp',preview:true,compatibleIds:s.compatibleIds||[],
  reference:{retailer:'Packware',url:'https://www.packware.com.au/collections/top-sellers/products/'+s.handle,note:s.note},
  variants:s.variants.map((v,i)=>({...v,id:s.id+'-format-'+i,minimum:1,increment:1,priceCents:null,stock:null,active:true}))
}));

