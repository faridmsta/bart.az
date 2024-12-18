import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../img/logo.png'

function Header() {
    return (
        <header className='w-full' >
            <div className="header">
                <div className="top bg-[#F1F3FA] p-4">
                    <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
                        <div className="left">
                            <nav>
                                <ul className='flex gap-6 text-[15px]' >
                                    <li><Link to='' >Barter</Link></li>
                                    <li><Link to='' >Satılır</Link></li>
                                    <li><Link to='' >İcarə</Link></li>
                                    <li><Link to='' >Ehtiyacı olanlar üçün</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <nav>
                                <ul className='flex gap-[20px] text-[15px]' >
                                    <li><Link to='' >Mağaza aç</Link></li>
                                    <li><Link to='' >Giriş və qeydiyyat</Link></li>
                                    <li>
                                        AZ
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bottom bg-white p-4 flex  items-center">
                    <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between items-center gap-2 ">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="rest flex-1 gap-3 flex">
                            <div className="category w-[15%] ">
                                <div className="button bg-[#2970FF] p-2 text-white rounded-[12px] h-full flex justify-center items-center ">
                                    <span>Kateqoriyalar</span>
                                </div>
                            </div>
                            <div className="search bg-[#2970FF] w-[70%] p-1  rounded-[12px]">
                                <input
                                    className='border-none outline-none w-[90%] h-[100%] rounded-[8px] p-2'
                                    placeholder='Elanlar Üzrə axtarış'
                                    type="text"
                                    
                                    />
                                <button className='border-none outline-nonebg-[#2970FF] p-2 rounded-xl text-white w-[10%]'>
                                    Axtar
                                </button>
                            </div>
                            <Link
                                className='w-[15%] flex items-center justify-center bg-[#079455] text-white rounded-[12px] '
                                to=''
                            >
                                

                                    Yeni Elan
                                
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    )

}

export default Header