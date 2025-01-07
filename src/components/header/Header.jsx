import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../img/logo.png'

import category from './../img/icons/category.svg'
import plus from './../img/icons/plus.svg'
import { FaChevronRight } from "react-icons/fa";

import neqliyyat from './components/img/image 1.png'
import demlak from './components/img/image 1-1.png'
import eloktronika from './components/img/image 1-2.png'
import xidvebiz from './components/img/image 1-3.png'
import aksesuarlar from './components/img/image 1-4.png'
import specialaccesories from './components/img/image 1-5.png'
import usaqalemi from './components/img/image 1-6.png'
import iselanlari from './components/img/image 1-7.png'
import heyvanlar from './components/img/image 1-8.png'
import maqazalar from './components/img/image 1-9.png'
import seyahetler from './components/img/image 1-10.png'
import gozelliksaqlamliq from './components/img/image 1-11.png'
import hobby from './components/img/image 1-12.png'

import storeLine from './../img/icons/storeLine.svg'
import userLine from './../img/icons/userLine.svg'

const catalog1 = [
    {
        title: 'Neqliyyat',
        image: neqliyyat,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum1',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum2',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum3',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum4',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Daşınmaz əmlak',
        image: demlak,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Eloktronika',
        image: eloktronika,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Xidmətlər və biznes',
        image: xidvebiz,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Ehtiyat hissələri və aksesuarlar',
        image: aksesuarlar,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Şəxsi əşyalar',
        image: specialaccesories,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Uşaq aləmi',
        image: usaqalemi,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Is Elanlari',
        image: iselanlari,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Heyvanlar',
        image: heyvanlar,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Mağazalar',
        image: maqazalar,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Səyahət',
        image: seyahetler,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Gözəllik və sağlamlıq',
        image: gozelliksaqlamliq,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
    {
        title: 'Hobbi və asüdə',
        image: hobby,
        altMenu: [
            {
                title: 'Audio və video',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Kompyuter aksesuarları',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Oyunlar, pultlar və proqramlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Masaüstü kompyuterlər',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Komponentlər və monitorlar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Planşet və elektron kitablar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
            {
                title: 'Notbuklar və netbuklar',
                elements: [
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                    'Lorem ipsum',
                ]
            },
        ],
    },
]




function Header() {

    const [isdrop1, setIsDrop1] = useState(false)
    const [isdrop2, setIsDrop2] = useState(false)
    const [isdrop3, setIsDrop3] = useState(false)
    const [cat1index, setCat1index] = useState(0)
    const [cat2index, setCat2index] = useState(0)



    return (
        <header className='w-full font-jakarta' >
            <div className="header">
                <div className="top bg-[#F1F3FA] h-[56px] lg:flex items-center hidden ">
                    <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
                        <div className="left flex items-center">
                            <nav>
                                <ul className='flex gap-6 text-[15px] justify-between align-middle' >
                                    <li className='flex items-center' ><Link to='' >Barter</Link></li>
                                    <li className='flex items-center' ><Link to='' >Satılır</Link></li>
                                    <li className='flex items-center' ><Link to='' >İcarə</Link></li>
                                    <li className='flex items-center' ><Link to='' >Ehtiyacı olanlar üçün</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <nav>
                                <ul className='flex gap-[20px] text-[15px] justify-between align-middle ' >
                                    <li className='flex items-center' ><Link to='' className='flex gap-[6px]' ><img src={storeLine} alt="Store icon" /> Mağaza aç</Link></li>
                                    <li className='flex items-center' ><Link to='' className='flex gap-[6px]' ><img src={userLine} alt="user Icon" /> Giriş və qeydiyyat</Link></li>
                                    <li className='flex items-center' >

                                        <select name="" id="" className='p-1 bg-[#E3E8EF] rounded-[6px]' >
                                            <option value="">AZ</option>
                                            <option value="">EN</option>
                                        </select>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bottom bg-white pt-4 lg:p-4 flex  items-center">
                    <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex flex-col lg:flex-row justify-between items-center gap-2 ">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="rest flex-1 gap-3 flex w-full">
                            <div className="category w-[18%] relative hidden lg:inline-block  "
                                onMouseEnter={() => { setIsDrop1(true) }}
                                onMouseLeave={() => { setIsDrop1(false) }}
                            >
                                <div className="button bg-[#2970FF] p-2 text-white rounded-[12px] h-full flex justify-center items-center  gap-2 text-[12px] xl:text-[16px] ">
                                    <img src={category} alt="" />
                                    <span>Kateqoriyalar</span>
                                </div>
                                <div
                                    onMouseEnter={() => {
                                        setIsDrop1(true)
                                        setIsDrop2(true)
                                    }}
                                    onMouseLeave={() => { setIsDrop2(false) }}

                                    className={`drop1
                                    ${isdrop1 ? '' : 'hidden'}
                                     absolute top-[100%] z-50 pt-2 left-[-250px]   xl:left-[0%]`}>
                                    <nav className='shadow-md w-[320px] max-h-[744px]  custom-scrollbar  p-2 overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {
                                                catalog1.map((category, index) => (
                                                    <li
                                                        key={index}
                                                        onMouseEnter={() => {
                                                            setCat1index(index)
                                                        }}
                                                        className="p-2 hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4 justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <div className="image w-[50px] h-[50px] ">
                                                                    <img
                                                                        className='w-full h-full object-contain'
                                                                        src={category.image} alt="image" />
                                                                </div>
                                                                <p>{category.title}</p>
                                                            </div>
                                                            <FaChevronRight />
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                                <div
                                    onMouseEnter={() => {
                                        setIsDrop1(true)
                                        setIsDrop2(true)
                                        setIsDrop3(true)
                                    }}
                                    onMouseLeave={() => {
                                        setIsDrop2(false)
                                        setIsDrop3(false)
                                    }}

                                    className={`drop2
                                    ${isdrop2 ? '' : 'hidden'}
                                     absolute top-[100%] z-50 pt-2 pl-6 left-[50px] xl:left-[310px]`}>
                                    <nav className='shadow-md w-[320px] h-[744px]  custom-scrollbar  p-2  overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {
                                                catalog1[cat1index].altMenu?.map((category, index2) => (
                                                    <li
                                                        key={index2}
                                                        onMouseEnter={() => {
                                                            setCat2index(index2)

                                                        }}
                                                        className="p-2 h-[56px] flex items-center hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4 justify-between w-full">

                                                            <p>{category.title}</p>
                                                            <FaChevronRight />
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                                <div
                                    onMouseEnter={() => {
                                        setIsDrop2(true)
                                        setIsDrop3(true)
                                    }}

                                    onMouseLeave={() => {
                                        setIsDrop2(false)
                                        setIsDrop3(false)
                                    }}

                                    className={`drop3
                                    ${isdrop3 ? '' : 'hidden'}
                                     absolute top-[100%] z-50 pt-2 pl-6 left-[375px] xl:left-[640px]`}>
                                    <nav className='shadow-md w-[320px] h-[744px]  custom-scrollbar  p-2  overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {


                                                catalog1[cat1index].altMenu[cat2index].elements?.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="p-2  h-[56px] flex items-center hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4 justify-between w-full">

                                                            <p>{item}</p>
                                                            <FaChevronRight />
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="search bg-[#2970FF] w-full lg:w-[68%] rounded-[12px] text-[16px] lg:text-[12px] xl:text-[16px] ">
                                <input
                                    className='outline-none w-[80%] lg:w-[90%] h-[100%] rounded-[10px] py-[12px]  pl-[16px] border-[2px] border-[#2970FF] text-[15px] font-medium leading-[22px] tracking-[-0.03em] underline decoration-solid decoration-transparent'
                                    placeholder='Elanlar Üzrə axtarış'
                                    type="text"

                                />
                                <button className='border-none outline-nonebg-[#2970FF] p-2 rounded-xl text-white w-[20%] lg:w-[10%]'>
                                    Axtar
                                </button>
                            </div>
                            <Link
                                className='hidden lg:flex  w-[15%]  items-center justify-center bg-[#079455] text-white rounded-[12px] gap-2 '
                                to=''
                            >
                                <span className=' lg:text-[12px] xl:text-[16px]' >Yeni Elan</span>
                                <img src={plus} alt="" />

                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    )

}

export default Header