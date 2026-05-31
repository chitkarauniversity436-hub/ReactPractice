import React from 'react' 
import {Link,Routes,Route} from 'react-router-dom'
import Products from './Products'

const App = ()=>{
  return(
    <>
    <nav>
      <ul>
        <li ><Link to="/products">Products</Link></li>
      </ul>
    </nav>

      <Routes>
         <Route path="/products" element={<Products/>} >
            <Route path="electronics" element={<h1>Electronincs page</h1>}/>
            <Route path="clothing" element={<h1>clothing page</h1>}/>
            <Route path="Furtinuer" element={<h1>Furtinuer page</h1>}/> 
         </Route>

         <Route path="*" element={<h1>404 ,Page Not Found</h1>}/>
      </Routes>
    </>
  )
}
 
export default App; 