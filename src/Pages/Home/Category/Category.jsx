// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import Title from '../../../Components/Title/Title';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className=' mb-6 md:mb-none md:my-[80px]'>
            <div className='mx-2 lg:mx-[200px]'>
            <Title heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}/>    
            <Swiper
        slidesPerView={4}
        loop={true}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            320: {
              slidesPerView: 2, // Show only one slide for small screens (320px and up)
            },
            768: {
              slidesPerView: 3, // Show 2 slides for medium screens (768px and up)
            },
            1200: {
              slidesPerView: 4, // Show 4 slides for large screens (1200px and up)
            },
          }}
      >
        <SwiperSlide className='relative text-center'>
            <Link to="/order/salad">
            <img src={slide1} className='w-full' alt="" />
            <h1 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Salad</h1>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='relative text-center'>
            <Link to="/order/pizza">
            <img src={slide2} className='w-full' alt="" />
            <h1 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Pizza</h1>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='relative text-center'>
            <Link to="/order/soup">
            <img src={slide3} className='w-full' alt="" />
            <h1 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Soups</h1>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='relative text-center'>
            <Link to="/order/dessert">
            <img src={slide4} className='w-full' alt="" />
            <h1 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Desserts</h1>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='relative text-center'>
            <Link to="/order/drinks">
            <img src={slide5} className='w-full' alt="" />
            <h1 className='text-white absolute font-semibold text-4xl bottom-0 py-6 text-center bg-black bg-opacity-30 drop-shadow-xl w-full'>Drinks</h1>
            </Link>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
};

Category.propTypes = {
    
};

export default Category;