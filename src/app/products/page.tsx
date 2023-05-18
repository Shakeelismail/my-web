import Nav from "../../../component/navbar"
import Link from "next/link"
export default function Products(){
    return(
        <div>
        <h1>product page </h1>
       
        <Nav/>
        <h2>product list</h2>
       < ol>
            <li>
                <Link href="/products/product">product</Link>
                
            </li>
            <li>
                <Link href="/products/product">product</Link>
                
            </li>
            <li>
                <Link href="/products/product">product</Link>
                
            </li>
        </ol>
   </div>
  
    )
}