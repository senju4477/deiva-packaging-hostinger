import React from 'react';
import {createRoot} from 'react-dom/client';
import ShopApp from '../components/ShopApp';
import {demoProducts} from '../lib/demo';
createRoot(document.getElementById('root')!).render(<ShopApp products={demoProducts} config={{mode:'demo',quoteAvailable:false,paymentAvailable:false,businessEmail:'',businessPhone:''}} initialPath={window.location.pathname} initialQuery={window.location.search.slice(1)} staticPreview/>);
