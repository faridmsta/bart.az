import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Stories.css'
import { Navigation } from 'swiper/modules';





function Stories({stories,setStartingStory,setIsFocusStory}) {
    return (
        <div className='caruselItself' >
            <Swiper
                slidesPerView={(window.innerWidth>1024)? 8: (window.innerWidth>768)? 6 : (window.innerWidth>600)? 4 : (window.innerWidth>425)? 3 : 2}
                spaceBetween={0}
                freeMode={false}
                pagination={false}
                navigation={true}

                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    stories.map((item, index) => (
                        <div className="relative ">
                        <SwiperSlide key={item.id}>
                            <div
                            onClick={()=>{
                                setStartingStory(item.id-1)
                                setIsFocusStory(true)
                            }}
                             className="storyBox w-full h-full flex flex-col items-center  ">
                                <div className="imageBox w-[80%] aspect-square rounded-full overflow-hidden p-1 bg-gradient-to-br from-pink-600 via-pink-500 to-orange-500  ">
                                    <img
                                        className='w-full h-full object-cover rounded-full border-[2px] border-white hover:opacity-50 transition-[15]'
                                        src={item.src} alt="" />
                                </div>
                                <p className='w-[70%] align-middle text-[17px]  pt-2 leading-tight absolute top-[70%] md:top-[65%] lg:top-[60%] line-clamp-2'>{item.title}</p>
                            </div>
                        </SwiperSlide>
                        </div>

                    ))
                }

            </Swiper>
        </div>
    );
}

export default Stories