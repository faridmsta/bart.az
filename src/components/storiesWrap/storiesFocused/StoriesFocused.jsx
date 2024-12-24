import React, { useEffect, useState } from 'react';
import './StoriesFocused.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logo from './../../img/logoLight.png';
import { RxCross2 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function StoriesFocused({ stories, startingStory, setIsFocusStory }) {

    
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    // Function to calculate slides per view based on window width
    function getSlidesPerView() {
        if (window.innerWidth > 1100) return 2;
        if (window.innerWidth > 1070) return 1.8;
        if (window.innerWidth > 1000) return 1.6;
        if (window.innerWidth > 950) return 1.5;
        if (window.innerWidth > 767) return 1.4;
        if (window.innerWidth > 579) return 1.3;
        if (window.innerWidth > 424) return 1;
        return 1;
    }

    useEffect(() => {
        // Update slidesPerView state when window resizes
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="storyfull fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-[rgb(0,0,0,0.9)] z-[2]">
            <div className="container w-[80%] max-w-[1128px] m-auto">
                <div className="pt-10 pt-[70px] flex justify-between items-center">
                    <div className="logo ">
                        <img src={logo} alt="Logo" />
                    </div>
                    <button
                        className="text-white p-4 rounded-full border-[1px] border-[#364152]"
                        onClick={() => {
                            setIsFocusStory(false)
                        }}
                    >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <Swiper
                    slidesPerView={slidesPerView}
                    centeredSlides={true}
                    spaceBetween={200}
                    pagination={{ type: 'fraction' }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    initialSlide={startingStory} // Use the state here
                >
                    {stories.map((item) => (
                        <SwiperSlide key={item.id}>
                            <StoryItself data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

const StoryItself = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    return (
        <div className="storyItself relative w-full h-full">
            {/* Progress lines container */}
            <div className="absolute top-2 left-2 right-2 z-10 flex gap-1">
                {data.stories.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 flex-1 rounded-md transition-all ${index <= currentIndex ? 'bg-gray-500' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>

            {/* Swiper for stories */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={handleSlideChange}
                className="h-full"
            >
                {data.stories.map((item, index) => (
                    <SwiperSlide key={index} className='pt-5'>
                        <div className="w-full  object-cover bg-[#EFF4FF] p rounded-[20px] ">
                            <div className="username p-4 h-[15%] flex items-center gap-3">
                                <div className="image w-[32px] h-[32px] ">
                                    <img 
                                    className='w-full h-full object-contain'
                                    src={item.user.image} alt="" />
                                </div>
                                <div className="usernameText text-[14px]">{item.user.name}</div>
                            </div>
                            <div className="elan bg-white rounded-[20px] h-[85%] p-4 ">
                                <div className="info border-[2px] border-[#E3E8EF] rounded-[12px]">
                                    <div className="image overflow-hidden aspect-[4/3] rounded-[12px] ">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="p-[20px]">
                                        <h2 className='line-clamp-1 text-[20px] w-full mb-2  font-bold' >{item.title}</h2>
                                        <p  className='text-[#697586] text-[12px]' >{item.location},{item.date.day} {item.date.month} {item.date.year}</p>
                                    </div>
                                </div>
                                <Link className='w-full flex  items-center  justify-center p-3 bg-[#EFF4FF] text-[#155EEF] rounded-xl mt-3 gap-1' >
                                    Elana keçid <FaArrowRight />
                                </Link>
                            </div>



                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StoriesFocused;
