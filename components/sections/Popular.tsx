'use client';
import React, {useEffect, useState} from 'react';
import {getNewArrival, getPopular} from "@/firebase/Firebase";
import ShoeCard from "@/components/ShoeCard";
import EmptyState from "@/components/EmptyState";
import Button from "@/components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {getArrivals} from "@/lib/features/arrivalsSlice/arrivalSlice";

const Popular = () => {
    const dispatch:AppDispatch = useDispatch();
    const popular = useSelector((state:RootState) => state.arrivalsSlice.arrivals)
    useEffect(() => {
        dispatch(getArrivals())
    }, [dispatch])
    return (
        <div className="mt-20">
            <h1 className="font-bold text-5xl">Popular</h1>
            <div className="flex-col mt-16 justify-center items-center flex gap-10">
                <div className="flex-row justify-center flex-wrap flex gap-10 items-center">
                    {popular.length > 0 ? popular.map((item, index) => (
                        <ShoeCard key={index} title={item.name} thumbnail={item.thumbnail} color={item.color}
                                  sellingPrice={item.sellingPrice} type="popular" shoeId={item.shoeId}/>
                    )) : (<EmptyState title="Opps!" subTitle="No Popular"/>)}
                </div>
                {popular.length > 20 && <Button title="Load More" containerStyles=""/>}
            </div>
        </div>
    );
};

export default Popular;