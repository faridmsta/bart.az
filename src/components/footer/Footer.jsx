import React from 'react'
import Logo from './../img/logo.png'
import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer  py-16 bg-[#F1F3FA] hidden md:block font-jakarta">
            <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
                <div className="openStoreInnder w-full">
                    <div className="up flex justify-between items-center">
                        <div className="left">
                            <div className="logo mb-6">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="socials flex gap-[20px]">
                                <a
                                    className='p-2 border-[1px] border-[#697586] inline rounded-full'
                                    href="#" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF color='#697586' />
                                </a>
                                <a
                                    className='p-2 border-[1px] border-[#697586] inline rounded-full'
                                    href="#" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram  color='#697586' />
                                </a>
                                <a
                                    className='p-2 border-[1px] border-[#697586] inline rounded-full'
                                    href="#" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube color='#697586' />
                                </a>
                                <a
                                    className='p-2 border-[1px] border-[#697586] inline rounded-full'
                                    href="#" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok color='#697586' />
                                </a>


                            </div>
                        </div>
                        <div className="right flex w-[60%] justify-between ">
                            <div className="flex flex-col gap-2">
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Barter
                                </Link>
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                   Satılır
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    İcarə
                                </Link>
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Ehtiyacı olanlar üçün
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Mağaza aç
                                </Link>
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Haqqımızda
                                </Link>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Qaydalar
                                </Link>
                                <Link
                                    className='text-[#202939] text-[1rem]'
                                >
                                    Əlaqə
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="down flex items-center justify-between py-6 border-t-2 border-[#dcdfe7] mt-6 text-[#697586]" >
                        <p className="w-1/3 text-[12px] ">
                        Saytda yerləşdirilmiş bannerlər və elanların məzmununa görə saytın rəhbərliyi məsuliyyət daşımır! Copyright 2015-2024 Bart.az.
                        </p>
                        <p className="flex flex-col text-[12px] items-end">
                            <span>info@bart.az</span>
                            <span>(070) 274 15 10</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer