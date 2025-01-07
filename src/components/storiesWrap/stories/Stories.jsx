import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Stories.css'
import { Navigation } from 'swiper/modules';





function Stories({ stories, setStartingStory, setIsFocusStory }) {
    const [slidePer, setSlidePer] = useState(getSlidesPerView());

    function getSlidesPerView() {
        return window.innerWidth > 1280
            ? 8 
            : window.innerWidth > 1024
                ? 6
                : window.innerWidth > 768
                    ? 5
                    : window.innerWidth > 600
                        ? 4
                        : window.innerWidth > 426
                            ? 3
                            : 2.2;
    }

    useEffect(() => {
        const handleResize = () => {
            setSlidePer(getSlidesPerView());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='caruselItself' >
            <Swiper
                slidesPerView={slidePer}
                spaceBetween={0}
                freeMode={false}
                pagination={false}
                navigation={true}

                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    stories.map((item, index) => (
                        <div key={index} className="relative ">
                            <SwiperSlide key={item.id}>
                                <div
                                    onClick={() => {
                                        setStartingStory(item.id - 1)
                                        setIsFocusStory(true)
                                    }}
                                    className="storyBox w-full h-full flex flex-col items-center  ">
                                    <div className="imageBox w-[80%] aspect-square rounded-full overflow-hidden p-[3px] storybyGradient ">
                                        <img
                                            className='w-full h-full object-cover rounded-full border-[3px] border-white hover:opacity-50 transition-[15]'
                                            src={item.src} alt="" />
                                    </div>
                                    <p className='w-[70%] align-middle text-[17px]  pt-2 leading-tight absolute top-[65%] md:top-[65%] lg:top-[60%] line-clamp-2'>{item.title}</p>
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