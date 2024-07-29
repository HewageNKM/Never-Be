import React from 'react';
import {AiFillFilter} from "react-icons/ai";
import {filterOptions} from "@/constants";

const ProductHero = ({containerStyles}: { containerStyles: string }) => {
    return (
        <div className={`${containerStyles} mt-8 w-full flex-col flex gap-2`}>
            <div className="w-full">
                <h1 className="text-4xl font-bold">Products</h1>
                <h2 className="text-lg font-light">The best place to find the best products</h2>
            </div>
            <div className="w-full flex justify-between items-center">
                <label className="flex flex-row gap-2 justify-center items-center">
                    <div className="flex justify-center items-center gap-2">
                        <AiFillFilter size={25} className="text-primary"/>
                        <p className="font-medium text-lg">Filter By: </p>
                    </div>
                    <select className="text-primary font-bold p-1" defaultValue="all" onChange={(event)=>{}}>
                        {filterOptions.map((filter, index) => (<option key={index} className="text-primary font-bold" value={filter.value}>{filter.title}</option>))}
                    </select>
                </label>
            </div>
        </div>
    );
};

export default ProductHero;