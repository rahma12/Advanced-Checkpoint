import React from 'react'

const Produit = (props)=>{
    return(
        <div>
            <table>
                <tr>
                   <td>{props.oneproduit.name}</td>
                   <td>{props.oneproduit.price}</td>
                   <td>{props.oneproduit.category}</td>
                </tr>
            </table>
        </div>

    )

}
export default Produit;