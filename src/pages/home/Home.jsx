import React from 'react'

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



function Home() {
  return (
    <section className="bendoGrid w-full">
      <div className="container w-[90%] max-w-[1440px] m-auto flex justify-between align-middle">
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
  )
}

export default Home