import React from 'react'
import { NavLink } from 'react-router-dom'

import nhome from './../img/icons/nhome.svg'
import nclock from './../img/icons/nclock.svg'
import nuser from './../img/icons/nuser.svg'
import ncategory from './../img/icons/ncategory.svg'
import nhomeActive from './../img/icons/nhomeActive.svg'
import nclockActive from './../img/icons/nclockActive.svg'
import nuserActive from './../img/icons/nuserActive.svg'
import ncategoryActive from './../img/icons/ncategoryActive.svg'


import plus from './../img/icons/plus.svg'

function NavigatorMobile() {
    return (
        <div
            className='fixed -bottom-1 m-0 pt-10 md:hidden'
        >

            <nav className="flex justify-center items-center w-[100vw]  bg-[url('/navigationbg.png')] bg-cover bg-no-repeat bg-center ">
                <ul className='flex justify-between items-center w-full' >
                    <li className='w-[20%] p-6' >
                        <NavLink
                            to="/"
                            className="w-full flex hover:text-[#155EEF] flex-col items-center"
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nhomeActive}
                                            alt="Active Icon"
                                        />
                                    ) : (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nhome} // Pass inactive icon here
                                            alt="Inactive Icon"
                                        />
                                    )}
                                    <span className={isActive ? "text-[#155EEF]" : "text-gray-500"}>
                                        Əsas
                                    </span>
                                </>
                            )}
                        </NavLink>

                    </li>
                    <li className='w-[20%] p-6' >
                        <NavLink to='/history' className='w-full flex hover:text-[#155EEF]  flex-col items-center' >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nclockActive}
                                            alt="Active Icon"
                                        />
                                    ) : (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nclock} // Pass inactive icon here
                                            alt="Inactive Icon"
                                        />
                                    )}
                                    <span className={isActive ? "text-[#155EEF]" : "text-gray-500"}>
                                        Tarixçə
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li className='w-[20%]  flex p-2 relative' >
                        <NavLink className=' -rotate-45 absolute  bottom-2 left-[50%] translate-x-[-50%] aspect-square rounded-full flex  flex-col items-center justify-center ' >
                            <div className="icon w-[80px] aspect-square bg-[#155EEF]  rounded-full flex items-center justify-center  shadow-[-10px_10px_20px_#155EEF]">

                                <img
                                    className='w-[32px] aspect-square rotate-45'
                                    src={plus} alt="" />
                            </div>
                        </NavLink>
                    </li>
                    <li className='w-[20%] p-6'>
                        <NavLink 
                        to='/profile'
                        className='w-full flex hover:text-[#155EEF]  flex-col items-center' >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nuserActive}
                                            alt="Active Icon"
                                        />
                                    ) : (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={nuser} // Pass inactive icon here
                                            alt="Inactive Icon"
                                        />
                                    )}
                                    <span className={isActive ? "text-[#155EEF]" : "text-gray-500"}>
                                        Profilim
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li className='w-[20%] p-6'>
                        <NavLink
                        to='/category' 
                         className='w-full flex hover:text-[#155EEF]  flex-col items-center' >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={ncategoryActive}
                                            alt="Active Icon"
                                        />
                                    ) : (
                                        <img
                                            className="w-[25px] aspect-square"
                                            src={ncategory} // Pass inactive icon here
                                            alt="Inactive Icon"
                                        />
                                    )}
                                    <span className={isActive ? "text-[#155EEF]" : "text-gray-500"}>
                                        Menyu
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigatorMobile