import React from 'react'
import './App.css';
import Produit from './Produit';

const ProductTable =(props)=>{
    return(
        <div>
            <h1>Hello</h1>
            <table>
                <tr>
                    <td>name</td>
                    <td>price</td>
                    <td>category</td>
                </tr>
            </table>
                    {
                       props.table.map((el,i)=> <Produit oneproduit={el} key={i}/>)
                    }
        </div>
    )
}
export default ProductTable;