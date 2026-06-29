import React from 'react' 
import {Link , Outlet} from 'react-router-dom' 

const Products = ()=>{
    return(
        <>
        <h1>Products Page</h1>
        <ul >
            <li> <Link  to="electronics" > Electronics</Link></li>
            <li> <Link to="clothing"> clothing</Link></li>
            <li> <Link to="Furtinuer"> Furtinuer</Link></li>
        </ul>
        <Outlet/>
        </>
    )
}

export default Products ;
