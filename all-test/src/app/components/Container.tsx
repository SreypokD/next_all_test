import React from "react";
import HomeBanner from "./HomeBanner";

interface ContainerProps{
    children: React.ReactNode
}


const Container:React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="flex-grow" >
            <HomeBanner/>
            {children}
        </div>
     );
}
 
export default Container;