import React, {useEffect} from 'react';

const Products = ({containerStyles}:{containerStyles:string}) => {
    useEffect(()=>{

    })
    return (
        <div className={`${containerStyles} mt-3`}>
            <div  className="flex-wrap flex gap-5">
                Products
            </div>
        </div>
    );
};

export default Products;