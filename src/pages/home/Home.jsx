import React from 'react'
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

import iphone from './../../components/img/products/image1.jpg'

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
    customStyle: 'w-[10%]'
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
    customStyle: 'w-[14%]'
  },
]

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
    <main>
      <section className="bendoGrid w-full">
        <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="innerBendo w-full  " >
            <div className="upper flex w-full gap-3 mb-3">
              {
                bendoGridup.map((item) => (
                  <div className={`gridElement h-[112px]  p-3  relative  bg-[#F1F3FA] rounded-xl ${item.customStyle}`}>
                    <p className='text-[15px] font-semibold w-[60%]' >{item.title}</p>
                    <div className="image absolute bottom-0 right-0   flex items-end justify-end">
                      <img
                        className=' object-cover '
                        src={item.image} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="upper flex w-full gap-3">
              {
                bendoGridDown.map((item) => (
                  <div className={`gridElement h-[112px]  p-3  relative  bg-[#F1F3FA] rounded-xl ${item.customStyle}`}>
                    <p className='text-[15px] font-semibold w-[60%]' >{item.title}</p>
                    <div className="image absolute bottom-0 right-0   flex items-end justify-end">
                      <img
                        className=' object-cover '
                        src={item.image} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="specialAnnounce">
        <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">

        </div>
      </section>
      <section className="specialOffers my-12 bg-[#F8FAFC] py-12">
        <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex text-[32px] font-bold items-center gap-2">
                <img src={fire} alt="" className='aspect-square h-10' />
                <h2>Dəyərindən aşağı satılanlar</h2>
              </div>
              <div className="right">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-3 flex-wrap">
              {
                products.map((item, index) => (
                  <div className={`card 
                  ${(index == 0) ? "border-[#F79009]" : (index == 1) ? "border-[#17B26A]" : (index == 2) ? "border-[#F04438]" : (index == 3) ? "border-[#2970FF]" : "border-[#E3E8EF]"
                    }
                  
                  border-[2px] w-[24%] h-[340px] bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt="" />
                      </div>

                    </div>
                    <div className="bottom p-2">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>
                        <span className='flex gap-1' >
                          {item.isBarter && <div className=''>
                            <img src={barter} alt="" />
                          </div>}
                          {item.isCredit && <div className=''>
                            <img src={credit} alt="" />
                          </div>}
                        </span>
                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586]' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="specialOffers my-12 py-12">
        <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex text-[32px] font-bold items-center gap-2">
                <img src={frame} alt="" className='aspect-square h-10' />
                <h2>Premium elanlar</h2>
              </div>
              <div className="right">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-3 flex-wrap">
              {
                products.map((item, index) => (
                  <div className={`card 
                  border-[#E3E8EF]
                  
                  
                  border-[2px] w-[24%] h-[340px] bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt="" />
                      </div>

                    </div>
                    <div className="bottom p-2">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>

                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586]' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="specialOffers my-12  py-12">
        <div className="container w-[80%] max-w-[1128px] m-auto flex justify-between align-middle">
          <div className="specialOffersInnder w-full">
            <div className="header w-full flex justify-between items-end mb-4">
              <div className="left flex text-[32px] font-bold items-center gap-2">
                <img src={clock} alt="" className='aspect-square h-10' />
                <h2>Son elanlar</h2>
              </div>
              <div className="right">
                <Link className='text-[#2970FF] font-semibold text-[18px] underline' >Hamısına bax</Link>
              </div>
            </div>
            <div className="cards w-full flex items-center justify-between gap-3 flex-wrap">
              {
                products.map((item, index) => (
                  <div className={`card border-[#E3E8EF]
                 
                  border-[2px] w-[24%] h-[340px] bg rounded-[20px] overflow-hidden `}>
                    <div className="top w-full">
                      <div className="image w-full p-[2px] rounded-[16px] overflow-hidden">
                        <img
                          className='w-full rounded-[16px]'
                          src={item.img} alt="" />
                      </div>

                    </div>
                    <div className="bottom p-2">
                      <div className="info py-2 flex items-center justify-between">
                        <span className="price font-extrabold text-[20px] ">
                          {item.price} AZN
                        </span>
                        <span className='flex gap-1' >
                          {item.isBarter && <div className=''>
                            <img src={barter} alt="" />
                          </div>}
                          {item.isCredit && <div className=''>
                            <img src={credit} alt="" />
                          </div>}
                        </span>
                      </div>
                      <p className='longTextDeny py-1' >{item.description}</p>
                      <span className='text-[#697586]' >{item.location},{item.date.day}{item.date.month} {item.date.year}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home