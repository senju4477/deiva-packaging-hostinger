import ShopApp from '../components/ShopApp';
import {catalogue,publicCategories} from '../lib/catalogue';
import {publicConfig} from '../lib/config';
export const dynamic='force-dynamic';
export default async function Home(){let products:import('../lib/types').Product[];const config=publicConfig();let categoryList:import('../lib/types').Category[];try{[products,categoryList]=await Promise.all([catalogue(),publicCategories()]);}catch{products=[];categoryList=[];config.catalogueUnavailable=true;}return <ShopApp products={products} categoryList={categoryList} config={config}/>;}
