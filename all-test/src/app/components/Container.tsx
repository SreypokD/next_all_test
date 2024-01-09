import React from "react";
import HomeBanner from "./HomeBanner";
import ProductList from "./products/ProductList";

interface ContainerProps{
    children: React.ReactNode
}


const Container:React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="flex-grow m-5" >
            <HomeBanner/>
            <ProductList/>
            {children}
        </div>
     );
}
 
export default Container;