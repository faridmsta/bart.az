import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../img/logo.png'

import category from './../img/icons/category.svg'
import plus from './../img/icons/plus.svg'

import neqliyyat from './../../pages/home/components/bendoimg/image 1.png'
import demlak from './../../pages/home/components/bendoimg/image 2.png'
import eloktronika from './../../pages/home/components/bendoimg/image 3.png'
import xidvebiz from './../../pages/home/components/bendoimg/image 4.png'
import aksesuarlar from './../../pages/home/components/bendoimg/image 5.png'
import specialaccesories from './../../pages/home/components/bendoimg/image 6.png'
import usaqalemi from './../../pages/home/components/bendoimg/image 7.png'
import iselanlari from './../../pages/home/components/bendoimg/image 8.png'
import heyvanlar from './../../pages/home/components/bendoimg/image 9.png'
import maqazalar from './../../pages/home/components/bendoimg/image 10.png'
import seyahetler from './../../pages/home/components/bendoimg/image 11.png'
import gozelliksaqlamliq from './../../pages/home/components/bendoimg/image 12.png'
import hobby from './../../pages/home/components/bendoimg/image 13.png'


const catalog1 = [
    {
        title: 'Neqliyyat',
        image: neqliyyat,
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
        altMenu:  [
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
    const [cat1index,setCat1index] = useState(0)
    const [cat2index,setCat2index] = useState(0)



    return (
        <header className='w-full' >
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
                                    <li className='flex items-center' ><Link to='' >Mağaza aç</Link></li>
                                    <li className='flex items-center' ><Link to='' >Giriş və qeydiyyat</Link></li>
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
                                <div className="button bg-[#2970FF] p-2 text-white rounded-[12px] h-full flex justify-center items-center  gap-2 ">
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
                                    shadow-md absolute top-[100%] z-50 pt-2 `}>
                                    <nav className='w-[320px] max-h-[744px]  custom-scrollbar  p-2 overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {
                                                catalog1.map((category, index) => (
                                                    <li
                                                    onMouseEnter={() => {
                                                        setCat1index(index)
                                                    }}
                                                        className="p-2 hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4">
                                                            <div className="image w-[50px] h-[50px] ">
                                                                <img
                                                                    className='w-full h-full object-contain'
                                                                    src={category.image} alt="image" />
                                                            </div>
                                                            <p>{category.title}</p>
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
                                    shadow-md absolute top-[100%] z-50 pt-2 pl-6 left-[180%]`}>
                                    <nav className='w-[320px] h-[744px]  custom-scrollbar  p-2  overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {
                                                catalog1[cat1index].altMenu?.map((category, indexxx) => (
                                                    <li 
                                                    onMouseEnter={() => {
                                                        setCat2index(indexxx)
                                                        
                                                    }}
                                                    className="p-2 h-[56px] flex items-center hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4">
                                                            
                                                            <p>{category.title}</p>
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
                                    shadow-md absolute top-[100%] z-50 pt-2 pl-6 left-[375%]`}>
                                    <nav className='w-[320px] h-[744px]  custom-scrollbar  p-2  overflow-y-auto  bg-white rounded-[12px]' >
                                        <ul>
                                            {
                                                
                                                
                                                catalog1[cat1index].altMenu[cat2index].elements?.map((item, index) => (
                                                    <li className="p-2  h-[56px] flex items-center hover:bg-[#F1F3FA] rounded-xl">
                                                        <div className="left flex items-center gap-4">
                                                            
                                                            <p>{item}</p>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="search bg-[#2970FF] w-full lg:w-[68%] p-1  rounded-[12px]">
                                <input
                                    className='border-none outline-none w-[80%] lg:w-[90%] h-[100%] rounded-[8px] p-2'
                                    placeholder='Elanlar Üzrə axtarış'
                                    type="text"

                                />
                                <button className='border-none outline-nonebg-[#2970FF] p-2 rounded-xl text-white w-[20%] lg:w-[10%]'>
                                    Axtar
                                </button>
                            </div>
                            <Link
                                className='hidden lg:flex  w-[15%]  items-center justify-center bg-[#079455] text-white rounded-[12px] gap-2'
                                to=''
                            >
                                <span>Yeni Elan</span>
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