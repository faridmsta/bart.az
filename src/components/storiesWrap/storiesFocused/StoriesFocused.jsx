import React, { useState } from 'react';
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

    return (
        <div className="storyfull fixed top-0 left-0 w-[100dvw] h-[100vh] bg-[rgb(0,0,0,0.9)] z-[2]">
            <div className="container w-[80%] max-w-[1128px] m-auto">
                <div className="py-10 pt-[70px] flex justify-between items-center">
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
                    slidesPerView={(window.innerWidth>1100)? 2 :(window.innerWidth>1070)? 1.8 : (window.innerWidth>1000)? 1.6 : (window.innerWidth>950)? 1.5 : (window.innerWidth>767)? 1.4  : (window.innerWidth>579)? 1.3 : (window.innerWidth>424)? 1:  1 }
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
                        className={`h-1 flex-1 rounded-md transition-all ${index <= currentIndex ? 'bg-blue-500' : 'bg-gray-300'
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
                        <div className="w-full h-[600px] object-cover bg-[#EFF4FF] p rounded-[20px] ">
                            <div className="username p-4 h-[15%] flex items-center gap-3">
                                <div className="image w-[32px] h-[32px] ">
                                    <img 
                                    className='w-full h-full object-contain'
                                    src={item.user.image} alt="" />
                                </div>
                                <div className="usernameText text-[14px]">{item.user.name}</div>
                            </div>
                            <div className="elan bg-white rounded-[20px] h-[85%] p-4">
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
