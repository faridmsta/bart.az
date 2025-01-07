import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import neqliyyat from './components/bendoimg/image 1.png'
import demlak from './components/bendoimg/image 2.png'
import eloktronika from './components/bendoimg/image 3.png'
import xidvebiz from './components/bendoimg/image 4.png'
import aksesuarlar from './components/bendoimg/image 5.png'
import specialaccesories from './components/bendoimg/image 6.png'
import usaqalemi from './components/bendoimg/image 7.png'
import iselanlari from './components/bendoimg/image 8.png'
import heyvanlar from './components/bendoimg/image 9.png'
import maqazalar from './components/bendoimg/image 10.png'
import seyahetler from './components/bendoimg/image 11.png'
import gozelliksaqlamliq from './components/bendoimg/image 12.png'
import hobby from './components/bendoimg/image 13.png'

import fire from './../../components/img/icons/fire.svg'
import frame from './../../components/img/icons/frame.svg'
import clock from './../../components/img/icons/clock.svg'
import barter from './../../components/img/icons/barter.svg'
import credit from './../../components/img/icons/kredit.svg'
import lupa from './../../components/img/icons/lupa.svg'
import store from './../../components/img/icons/store.svg'
import fi_check from './../../components/img/icons/fi_check.svg'

import camera from './../../components/img/icons/camera.svg'
import monitor from './../../components/img/icons/monitor.svg'
import pring from './../../components/img/icons/pring.svg'
import sofa from './../../components/img/icons/sofa.svg'
import storeWhite from './../../components/img/icons/storeWhite.svg'
import vacuumcleaner from './../../components/img/icons/vacuumcleaner.svg'

import monitormarket from './components/monitorMarket.png'

import iphone from './../../components/img/products/image1.jpg'
import StoriesWrap from '../../components/storiesWrap/StoriesWrap'




const bendoGridup = [
  {
    title: 'Neqliyyat',
    image: neqliyyat,
    customStyle: 'w-[18%]'
  },
  {
    title: 'Daşınmaz əmlak',
    image: demlak,
    customStyle: 'w-[14%]'
  },
  {
    title: 'Eloktronika',
    image: eloktronika,
    customStyle: 'w-[16%]'
  },
  {
    title: 'Xidmətlər və biznes',
    image: xidvebiz,
    customStyle: 'w-[16%]'
  },
  {
    title: 'Ehtiyat hissələri və aksesuarlar',
    image: aksesuarlar,
    customStyle: 'w-[20%]'
  },
  {
    title: 'Şəxsi əşyalar',
    image: specialaccesories,
    customStyle: 'w-[16%]'
  },
]
const bendoGridDown = [
  {
    title: 'Uşaq aləmi',
    image: usaqalemi,
    customStyle: ' w-[13%]'
  },
  {
    title: 'Is Elanlari',
    image: iselanlari,
    customStyle: 'w-[14%]'
  },
  {
    title: 'Heyvanlar',
    image: heyvanlar,
    customStyle: 'w-[14%]'
  },
  {
    title: 'Mağazalar',
    image: maqazalar,
    customStyle: 'w-[16%]'
  },
  {
    title: 'Səyahət',
    image: seyahetler,
    customStyle: 'w-[14%]'
  },
  {
    title: 'Gözəllik və sağlamlıq',
    image: gozelliksaqlamliq,
    customStyle: 'w-[14%]'
  },
  {
    title: 'Hobbi və asüdə',
    image: hobby,
    customStyle: ' w-[14%]'
  },
]

const popularSearches = [
  'yüngül lehimli disklər',
  'ABS',
  'lyuk',
  'yağış sensoru',
  'mərkəzi qapanma',
  'planşetlər',
  'maqnitola',
  'ps3 oyunları',
  'apple notebook',
  'telefon',
  'lg notebook',
  'fotoaparatların satışı',
  'proqramlar',
  'daşınmaz əmlak',
  'torpaq satılır',
  'playstation 3 satılır',
  'chevrolet',
  'lorem ipsum',
  'yüngül lehimli disklər',  // Təkrar daxil edilmişlər
  'ABS',
  'lyuk',
  'yağış sensoru',
  'mərkəzi qapanma',
  'planşetlər',
  'maqnitola',
  'ps3 oyunları',
  'apple notebook',
  'telefon',
  'lg notebook',
  'fotoaparatların satışı',
  'proqramlar',
  'daşınmaz əmlak',
  'torpaq satılır',
  'playstation 3 satılır',
  'chevrolet',
  'lorem ipsum',
  'yüngül lehimli disklər',
  'ABS',
  'lyuk',
  'yağış sensoru',
  'mərkəzi qapanma',
  'planşetlər',
  'maqnitola'
];



const products = [
  {
    id: 1,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: false,
  },
  {
    id: 2,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: true,
    isCredit: false,
  },
  {
    id: 3,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: false,
  },
  {
    id: 4,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: false,
  },
  {
    id: 5,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: true,
    isCredit: true,
  },
  {
    id: 6,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: false,
  },
  {
    id: 7,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: true,
  },
  {
    id: 8,
    img: iphone,
    price: 46500,
    description: 'Samsung Galaxy S24 Onyx Black 128GB/8GB',
    date: {
      day: 1,
      month: 'sentyabr',
      year: 2024
    },
    location: 'Baku',
    isBarter: false,
    isCredit: false,
  },
]


function Home() {




  return (

    <main className=' pb-14  font-jakarta'>
      <section className="bendoGrid w-full my-6">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle overflow-x-auto custom-scrollbar  lg:overflow-hidden ">
          <div className="innerBendo flex lg:block lg:w-full gap-3">
            <div className="upper flex min-w-[100%] gap-3 mb-3 flex-nowrap">
              {bendoGridup.map((item, index) => (
                <div key={index} className={`gridElement lg:flex-shrink h-[112px] p-3 relative bg-[#F1F3FA] rounded-xl overflow-hidden ${item.customStyle}`}>
                  <p className="text-[15px] font-semibold w-[80%] ">{item.title}</p>
                  <div className="image absolute bottom-0 right-0 flex items-end justify-end">
                    <img className="object-cover" src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="upper flex min-w-[100%] gap-3 flex-nowrap  lg:overflow-hidden ">
              {bendoGridDown.map((item, index) => (
                <div key={index} className={`gridElement  lg:flex-shrink h-[112px] p-3 relative bg-[#F1F3FA] rounded-xl overflow-hidden ${item.customStyle}`}>
                  <p className="text-[15px] font-semibold w-[80%]">{item.title}</p>
                  <div className="image absolute bottom-0 right-0 flex items-end justify-end">
                    <img className="object-cover" src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="specialAnnounce w-full my-12">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialAnnounceInner w-full ">
            <h2 className='font-bold text-[32px] mb-2' >Xüsusi elanlar </h2>
            <StoriesWrap />
          </div>
        </div>
      </section>
      <section className="specialOffers my-12 bg-[#F8FAFC] py-12">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between  items-end mb-4">
              <div className="left flex  items-center gap-2">
                <img src={fire} alt="fire emoji" className='aspect-square h-10' />
                <h2 className='text-[20px] sm:text-[32px] font-bold' >Dəyərindən aşağı satılanlar</h2>
              </div>
              <div className="right hidden sm:inline">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline ' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-1 lg:gap-2 flex-wrap">
              {
                products.map((item, index) => (
                  <div key={item.id} className={`card 
                  ${(index == 0) ? "border-[#F79009]" : (index == 1) ? "border-[#17B26A]" : (index == 2) ? "border-[#F04438]" : (index == 3) ? "border-[#2970FF]" : "border-[#E3E8EF]"
                    }
                  
                  border-[2px] w-[49%] sm:w-[30%]  lg:w-[24%]  bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt={item.description} />
                      </div>

                    </div>
                    <div className="bottom p-4 ">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>
                        <span className='flex gap-1' >
                          {item.isBarter && <div className=''>
                            <img src={barter} alt="barter" />
                          </div>}
                          {item.isCredit && <div className=''>
                            <img src={credit} alt="credit" />
                          </div>}
                        </span>
                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586] ' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full flex items-center justify-center pt-5  sm:hidden ">
              <Link className='text-[#2970FF] font-semibold text-[18px] underline ' >Hamısına bax</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="specialOffers my-12 py-12">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex  items-center gap-2">
                <img src={frame} alt="frame emoji" className='aspect-square h-10' />
                <h2 className='text-[20px] sm:text-[32px] font-bold' >Premium elanlar</h2>
              </div>
              <div className="right hidden sm:inline">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline ' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-1 lg:gap-2 flex-wrap">
              {
                products.map((item, index) => (
                  <div key={item.id} className={`card 
                  border-[#E3E8EF]
                  
                  
                  border-[2px] w-[49%] sm:w-[30%]  lg:w-[24%] bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt={item.description} />
                      </div>

                    </div>
                    <div className="bottom p-4 ">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>

                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586] pb-3' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full flex items-center justify-center pt-5  sm:hidden ">
              <Link className='text-[#2970FF] font-semibold text-[18px] underline ' >Hamısına bax</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="specialOffers my-12  py-12 bg-[#F8FAFC]">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex text-[32px] font-bold items-center gap-2">
                <img src={clock} alt="clock emoji" className='aspect-square h-10' />
                <h2 className='text-[20px] sm:text-[32px] font-bold' >Son elanlar</h2>
              </div>
              <div className="right hidden sm:inline">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-1 lg:gap-2 flex-wrap">
              {
                products.map((item, index) => (
                  <div key={item.id} className={`card border-[#E3E8EF]
                 
                  border-[2px] w-[49%] sm:w-[30%]  lg:w-[24%] bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt={item.description} />
                      </div>

                    </div>
                    <div className="bottom p-4 ">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>
                        <span className='flex gap-1' >
                          {item.isBarter && <div className=''>
                            <img src={barter} alt="barter emoji" />
                          </div>}
                          {item.isCredit && <div className=''>
                            <img src={credit} alt="credit emoji" />
                          </div>}
                        </span>
                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586] pb-3' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full flex items-center justify-center pt-5  sm:hidden ">
              <Link className='text-[#2970FF] font-semibold text-[18px] underline ' >Hamısına bax</Link>
            </div>
          </div>
        </div>
      </section>


      <section className="openStore my-12  py-12 hidden md:block">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="openStoreInner w-full bg-[url('/maqazaAc.png')] bg-cover bg-center h-[426px] rounded-3xl py-10 px-16 relative">
            <div className="icon rotate-[15deg] top-[20%] right-[5%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={camera} alt="icon"
                className='-rotate-[15deg] '
              />
            </div>
            <div className="icon -rotate-[42deg] top-[80%] right-[35%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={monitor} alt="icon"
                className='rotate-[42deg] '
              />
            </div>
            <div className="icon -rotate-[40deg] top-[65%] right-[3%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={pring} alt="icon"
                className='rotate-[50deg] '
              />
            </div>
            <div className="icon -rotate-[22deg] top-[50%] right-[45%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={sofa} alt="icon"
                className='rotate-[20deg] '
              />
            </div>
            <div className="icon rotate-[15deg] top-[25%] right-[58%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={storeWhite} alt="icon"
                className='-rotate-[15deg] '
              />
            </div>
            <div className="icon -rotate-[3deg] top-[25%] right-[42%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-3 overflow-hidden">
              <img src={vacuumcleaner} alt="icon"
                className='rotate-[0deg] '
              />
            </div>

            <div className="context flex flex-col justify-between items-start h-full ">
              <div className="bg-white py-3 px-6 font-bold text-[32px] rounded-2xl">
                Mağaza aç
              </div>
              <div className="p-4 bg-[linear-gradient(209deg,rgba(21,94,239,0)_0%,rgba(21,94,239,0.5)_32%)] text-white rounded-2xl w-[45%] flex flex-col  gap-2">
                <h3 className='text-lg font-semibold text-left' >Mağaza açmanın üstünlükləri</h3>
                <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px]">
                  <p>Elanların əsas səhifə və axtarışlarda daha önə çıxsın</p><img src={fi_check} alt="Check" />
                </div>
                <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px]">
                  <p>Daha çox sayda elan yerləşdir</p><img src={fi_check} alt="Check" />
                </div>
                <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px]">
                  <p>Profilinə banner, logo, sosial və veb sayt linkləri əlavə etmə</p><img src={fi_check} alt="Check" />
                </div>
                <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px]">
                  <p>Daha çox alıcıya göstərilmə</p><img src={fi_check} alt="Check" />
                </div>
              </div>
              <div className="bg-[#1570EF] flex items-center justify-center text-white py-3 px-6 font-semibold text-[16px] rounded-xl">
                <img className='inline mr-2' src={store} alt='Store icon' />
                Mağaza aç
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="openStore my-12  py-12 block  md:hidden">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="openStoreInner w-full bg-[url('/maqazaAcMobile.png')] bg-cover bg-no-repeat bg-center  rounded-3xl py-10 px-5 relative">
            <div className="icon rotate-[15deg] top-[20%] right-[80%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={camera} alt="icon"
                className='-rotate-[15deg] '
              />
            </div>
            <div className="icon -rotate-[42deg] top-[90%] right-[0%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={monitor} alt="icon"
                className='rotate-[42deg] '
              />
            </div>
            <div className="icon -rotate-[40deg] top-[80%] left-[-5%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={pring} alt="icon"
                className='rotate-[50deg] '
              />
            </div>
            <div className="icon -rotate-[22deg] top-[45%] right-[80%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={sofa} alt="icon"
                className='rotate-[20deg] '
              />
            </div>
            <div className="icon rotate-[15deg] top-[45%] right-[20%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-2 overflow-hidden">
              <img src={storeWhite} alt="icon"
                className='-rotate-[15deg] '
              />
            </div>
            <div className="icon -rotate-[3deg] top-[12%] right-[2%] bg-white/16 rounded-xl shadow-md backdrop-blur-lg absolute  p-3 overflow-hidden">
              <img src={vacuumcleaner} alt="icon"
                className='rotate-[0deg] '
              />
            </div>
            <div className="context flex flex-col justify-between items-start h-full ">
              <div className="bg-white py-3 px-6 font-bold text-[32px] text-center w-full rounded-2xl">
                Mağaza aç
              </div>

              <div className="middle w-full py-5">
                <img
                  className='w-full'
                  src={monitormarket} alt="icon" />
              </div>
              <div className="down w-full">
                <div className="p-4 bg-[linear-gradient(209deg,rgba(21,94,239,0)_0%,rgba(21,94,239,0.5)_32%)] text-white rounded-2xl w-full flex flex-col  gap-2  mb-5">
                  <h3 className='text-lg font-semibold text-left' >Mağaza açmanın üstünlükləri</h3>
                  <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px] gap-2">
                    <p>Elanların əsas səhifə və axtarışlarda daha önə çıxsın</p><img src={fi_check} alt="Check" />
                  </div>
                  <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px] gap-2">
                    <p>Daha çox sayda elan yerləşdir</p><img src={fi_check} alt="Check" />
                  </div>
                  <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px] gap-2">
                    <p>Profilinə banner, logo, sosial və veb sayt linkləri əlavə etmə</p><img src={fi_check} alt="Check" />
                  </div>
                  <div className="w-full flex text-sm font-medium text-left justify-between text-[#FFFFFFbb] text-[14px] gap-2">
                    <p>Daha çox alıcıya göstərilmə</p><img src={fi_check} alt="Check" />
                  </div>
                </div>
                <div className="bg-[#1570EF] flex items-center justify-center text-white py-3 px-6 font-semibold text-[16px] rounded-xl">
                  <img className='inline mr-2' src={store} alt='Store icon' />
                  Mağaza aç
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="popularSearch my-12 py-12 ">
        <div className="container w-[90%] lg:w-[80%] max-w-[1128px] m-auto">
          <div className="popularSearch w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex text-[32px] font-bold items-center gap-2">
                <img src={lupa} alt="Lupa emoji" className="aspect-square h-10" />
                <h2>Populyar axtarışlar</h2>
              </div>
            </div>
            <div className="searches flex md:flex-wrap gap-3 overflow-x-auto custom-scrollbar pb-2  w-full">
              {popularSearches.map((item, index) => (
                <div
                  key={index}
                  className="py-2 px-4 bg-[#F1F3FA] rounded-[6px] text-[15px] whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Home