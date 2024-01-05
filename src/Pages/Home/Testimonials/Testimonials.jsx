import { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] =  useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-restaurant-server-topaz.vercel.app/reviews')
        .then(res=> res.json())
        .then(data => {
            setReviews(data);
        })
    },[])
    return (
        <section className="my-6 lg:my-[80px]">
           <Title heading={"TESTIMONIALS"}  subHeading={"What Our Clients Say"}/>
            <div className="mx-2 lg:mx-[200px]">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-gray-200 rounded-lg">
                {
                reviews.map(review => 
                <SwiperSlide key={review._id}>
                    <div className="text-center py-8">
                        <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly className="mx-auto pb-2"/>
                        <BiSolidQuoteLeft className="text-7xl text-[#CD9003] mx-auto pb-2"/>
                        <p className="px-6 lg:px-[100px] text-gray-600">{review.details}</p>
                        <h1 className="text-2xl text-[#CD9003] font-semibold p-2 uppercase">{review.name}</h1>
                    </div>
                </SwiperSlide>)
                }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;