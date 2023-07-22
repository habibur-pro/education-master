import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import slide1 from '../../assets/images/Slider/slide-1.jpg'
import slide2 from '../../assets/images/Slider/slide-2.jpg'
import slide3 from '../../assets/images/Slider/slide-3.jpg'
import MyContainer from '../MyContainer/MyContainer';


const Header = () => {
    return (
        <header className='max-h-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='h-screen bg-cover ' style={{
                        backgroundImage: `linear-gradient(to right, rgba(3, 46, 63, 0.70), rgba(3, 46, 63, 0.20)), url(${slide1})`
                    }}>
                        <MyContainer>
                            <div className='h-screen flex  items-center'>
                                <div className='md:w-1/2'>
                                    <h3 className='text-2xl  text-white mb-3'>Welcome to Education Master</h3>
                                    <h1 className='text-5xl font-bold text-white leading-[60px] mb-5 '>Education is the best key success in life</h1>
                                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione sapiente cupiditate assumenda. Sed libero expedita eos! Dolore odio repudiandae id accusantium libero? Laboriosam ut corrupti debitis quisquam molestias quos.</p>
                                    <div className='flex gap-10 mt-10'>
                                        <button className='btn btn-primary'>Discover More</button>
                                        <button className='btn btn-primary'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </MyContainer>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen bg-cover ' style={{
                        backgroundImage: `linear-gradient(to right, rgba(3, 46, 63, 0.70), rgba(3, 46, 63, 0.20)), url(${slide2})`
                    }}>
                        <MyContainer>
                            <div className='h-screen flex  items-center'>
                                <div className='md:w-1/2'>
                                    <h3 className='text-2xl  text-white mb-3'>Welcome to Education Master</h3>
                                    <h1 className='text-5xl font-bold text-white leading-[60px] mb-5 '>Education is the best key success in life</h1>
                                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione sapiente cupiditate assumenda. Sed libero expedita eos! Dolore odio repudiandae id accusantium libero? Laboriosam ut corrupti debitis quisquam molestias quos.</p>
                                    <div className='flex gap-10 mt-10'>
                                        <button className='btn btn-primary'>Discover More</button>
                                        <button className='btn btn-primary'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </MyContainer>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen bg-cover ' style={{
                        backgroundImage: `linear-gradient(to right, rgba(3, 46, 63, 0.70), rgba(3, 46, 63, 0.20)), url(${slide3})`
                    }}>
                        <MyContainer>
                            <div className='h-screen flex  items-center'>
                                <div className='md:w-1/2'>
                                    <h3 className='text-2xl  text-white mb-3'>Welcome to Education Master</h3>
                                    <h1 className='text-5xl font-bold text-white leading-[60px] mb-5 '>Education is the best key success in life</h1>
                                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione sapiente cupiditate assumenda. Sed libero expedita eos! Dolore odio repudiandae id accusantium libero? Laboriosam ut corrupti debitis quisquam molestias quos.</p>
                                    <div className='flex gap-10 mt-10'>
                                        <button className='btn btn-primary'>Discover More</button>
                                        <button className='btn btn-primary'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </MyContainer>

                    </div>
                </SwiperSlide>



            </Swiper>
        </header>
    );
};

export default Header;