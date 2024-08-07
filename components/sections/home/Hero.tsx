'use client';
import React, {useEffect, useState} from 'react';
import BorderButton from "@/components/BorderButton";
import ImageSlider from "@/components/ImageSlider";
import {Skeleton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {getSliders} from "@/lib/features/sliderSlice/sliderSlice";
import Image from "next/image";
import {authentic, payment, shipping} from "@/assets";
import Link from "next/link";

const Hero = ({containerStyles}:{containerStyles:string}) => {
    const dispatch:AppDispatch = useDispatch();
    const {sliders, isLoading} = useSelector((state:RootState)  => state.sliderSlice)
    useEffect(() => {
       dispatch(getSliders())
    }, [dispatch])
    return (
        <div className={`relative mt-16 flex flex-col lg:mt-2 ${containerStyles}`}>
            {isLoading ? (
                <Skeleton animation="wave" sx={{width: '96vw', height: '90vh', background: "rgb(243 244 246)"}}/>) : (
                <div className="relative w-[100vw]">
                    <ImageSlider images={sliders} imageStyles="w-[100vw] h-[45vh] lg:h-[85vh] bg-cover"/>
                    <div className="absolute flex-col gap-7 flex z-30 bottom-10 left-10 lg:bottom-16 lg:left-16">
                        <h2 className="text-sm line-clamp-2 lg:text-3xl lg:line-clamp-1 font-semibold text-white">Wear It, Like You
                            Never Before</h2>
                        <Link href="/products/shoes">
                            <BorderButton
                                buttonStyles="border-[1.4px] absolute -top-1.5 -left-1.5 p-1 w-[8rem] h-[2.4rem] text-center border-white lg:text-xl text-sm text-white hover:text-black hover:bg-primary"
                                title="Shop Now" imageUrl=""
                                containerStyles="relative border-[1.4px] border-white w-[8rem] h-[2.4rem]"/>
                        </Link>
                    </div>
                </div>
            )}
            <div className="mt-10 px-3 md:px-8 flex-row flex flex-wrap w-full justify-between items-center gap-10">
                <div className="flex flex-row justify-between items-center gap-2">
                    <div>
                        <Image src={shipping} alt="fast shipping" className="w-10 h-10 bg-contain"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">
                            Fast Shipping
                        </h3>
                        <p className="text-sm capitalize font-light md:w-[20vw]">
                            Delivered to your doorstep within 2-4 working days
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <div>
                        <Image src={authentic} alt="authentic" className="w-10 h-10 bg-contain"/>
                    </div>
                    <div>
                        <h3 className="text-xl capitalize font-bold">
                            Genuine Products
                        </h3>
                        <p className="text-sm capitalize font-light md:w-[20vw]">
                            All the products are made from 100% quality materials and made in Vietnam
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                    <div>
                        <Image src={payment} alt="securedPayment" className="w-12 h-12 bg-contain"/>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">
                            Secure Payment
                        </h3>
                        <p className="text-sm capitalize font-light md:w-[20vw]">
                            All the payments are secured by the latest technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;