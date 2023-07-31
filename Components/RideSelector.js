'use-client'
import React from 'react'
import Image from 'next/image';

import uberAuto from './rides/uberAuto.jpg'
import uberbike from './rides/uberbike.png'
import uberBlack from './rides/uberBlack.png'
import uberX from './rides/uberX.jpg'
import rupees from './rides/rupees.png'

const style={
  wrapper:'h-full flex flex-col',
  title: 'text-gray text-center text-xs py-2 border-b text-black font-bold',
  carList: 'flex flex-col flex-1 overflow-scroll text-black',
  car: 'flex p-3 m-2 items-center border-2 border-white',
  selectedCar:'border-2 border-black flex p-3 m-2 items-center',
  carImage: 'h-14',
  carDetails:'ml-2 flex-1 text-black',
  name:'font-medium text-black',
  time:'text-xs text-blue-500',
  priceContainer:'flex items-center',
  price:'mr-[-0.8rem] text-black'

}
const carlist=[
  { 
  name: 'UberAuto',
  icon: uberAuto,
  priceMultiplier:1,
  },
  {
  name: 'UberBike',
  icon: uberbike,
  priceMultiplier:.50,
  },
  {
  name: 'UberBlack',
  icon: uberBlack,
  priceMultiplier:2,
  },
  {
  name: 'UberX',
  icon: uberX,
  priceMultiplier:1.50,
  },
  
]
const basePrice=1542
export default function RideSelector(){
    return(
      <div className={style.wrapper}>
      <div className={style.title}>Choose a ride</div>
      <br></br>
      <div className={style.carlist}>
        {carlist.map((car, index) => (
          <div className={style.car} key={index}>
            <Image 
              src={car.icon}
              className={style.carImage}
              height={70}
              width={70}
            alt=""></Image>
           
            <div className={style.carDetails}>
              <div className={style.name}>{car.name}</div>
            </div>
            <div className={style.time}>5 mins away</div>
            <div className={style.priceContainer}>
              <Image src={rupees} height={8} width={10} alt=""></Image>
              <div className={style.price}>
                {((basePrice/10 ** 5)* car.priceMultiplier).toFixed(5)}
              </div>
            </div>
            <br></br>
            
          </div>
        ))}
      </div>
    </div>
    )
}