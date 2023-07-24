import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import MyContainer from '../MyContainer/MyContainer'

// swiper css 
import 'swiper/css';
import 'swiper/css/pagination';
// swiper modules
import { Pagination, Autoplay } from 'swiper/modules';



const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const baseURL = import.meta.env.VITE_BASEURL;

    useEffect(() => {

        fetch(`${baseURL}/reviews`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])

    return (
        <MyContainer>
            <div className='my-20'>
                <h1 className='text-center text-3xl font-bold my-20'>Reviews</h1>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    loop={true}
                    spaceBetween={30}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}




                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <div>
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <ReviewItem review={review} />
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </MyContainer>
    );
};

export default Reviews;