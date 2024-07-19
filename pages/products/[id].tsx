import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Header from "@/components/sections/Header";
import ShoeDetails from "@/components/sections/ShoeDetails";
import ShoeReview from "@/components/sections/ShoeReview";
import Footer from "@/components/sections/Footer";
import SimilarProducts from "@/components/sections/SimilarProducts";
import {getAShoeById} from "@/firebase/Firebase";
import {Rating} from "@mui/material";
import FeedBack from "@/components/FeedBack";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/lib/store";
import {getCurrentUser} from "@/lib/features/authSlice/authSlice";

const Id = () => {
    const router = useRouter();
    const [shoe, setShoe] = useState({});

    useEffect(() => {
        if (router.query.product) {
            getAShoeById(router.query.id).then((shoe) => {
                setShoe(shoe);
            });
        }
    }, [router.query.product]);
    return (
        <main className="w-full relative overflow-clip h-full px-5 md:px-10 py-4">
            <Header/>
            <ShoeDetails shoe={shoe}/>
            <ShoeReview shoe={shoe}/>
            <SimilarProducts shoe={shoe}/>
            <Footer/>
        </main>
    );
}

export default Id;