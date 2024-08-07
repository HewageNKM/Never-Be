import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import Header from "@/components/Header";
import ShoeDetails from "@/components/sections/productDetails/ShoeDetails";
import Footer from "@/components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {getShoeDetails} from "@/lib/features/shoeDetailsSlice/shoeDetailsSlice";
import ShoeReview from "@/components/sections/productDetails/ShoeReview";
import SimilarProducts from "@/components/sections/productDetails/SimilarProducts";
import ReviewModel from "@/components/ReviewModel";
import {AnimatePresence} from "framer-motion";
import LoginModel from "@/components/LoginModel";

const Id = () => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();
    const addReviewDialog = useSelector((state: RootState) => state.shoeReviewSlice.reviewAddDialog);
    const shoe = useSelector((state: RootState) => state.shoeDetailsSlice.shoeDetails);
    const showLoginDialog = useSelector((state: RootState) => state.headerSlice.showLoginDialog);
    useEffect(() => {
        dispatch(getShoeDetails(router.query.id as string));
    }, [router.query.id, dispatch]);

    return (
        <main className="w-full relative overflow-clip h-full">
            <Header containerStyles='px-5 md:px-10 py-4'/>
            <ShoeDetails shoe={shoe} containerStyles='px-5 md:px-10 py-4'/>
            <ShoeReview shoe={shoe} containerStyles='px-5 md:px-10 py-4'/>
            <SimilarProducts shoe={shoe} containerStyles='px-5 md:px-10 py-4'/>
            <Footer/>
            <AnimatePresence>
                {addReviewDialog && (
                    <ReviewModel/>
                )}
                {showLoginDialog && (
                    <LoginModel/>
                )}
            </AnimatePresence>

        </main>
    );
}

export default Id;