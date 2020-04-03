import React from 'react';
import './App.css';
import ProductTable from './ProductTable';

const tproduit = [
  {
    name: 'Monulex',
    price: '150',
    category: 'Electronics'
  },
  {
    name: 'Jupe',
    price: '75',
    category: 'Electronics'
  },

]

const App=()=> {
  return (
    <div className="App">
     <ProductTable table={tproduit}/>
    </div>
  );
}

export default App;

