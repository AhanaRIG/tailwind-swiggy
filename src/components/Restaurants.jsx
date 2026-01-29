import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from './Card';


function Restaurants() {
    const [restaurant, setRestaurant] = useState([])
    const [scroll, setScroll] = useState(0)

    async function getRestaurants (){
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setRestaurant(data)
    }

    useEffect(() => {
        getRestaurants();
    },[])

    const handleScroll = (val) => {
        // val = val*3
        if(scroll ==0 && val == -130)
            return setScroll(650)

        if(scroll ==650 && val == 130)
            return setScroll(0)

        if(scroll>=0)
            return setScroll(scroll+val)
        
    }
    // useEffect(() => {
    //     console.log(scroll)
    // },[scroll])
    
  return (
    <div className='mx-auto max-w-[1200px]'>
        <div className='flex w-full justify-between'>
            <h1 className='font-bold text-2xl mb-6'>Top Restaurants in Mecheda</h1>
            <div className='flex items-center '>
                <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center m-2 cursor-pointer'
                onClick={() => handleScroll(-130)}>
                    <FaArrowLeft />
                </div>
                
                <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full flex items-center justify-center m-2 cursor-pointer'
                onClick={() => handleScroll(130)}>
                    <FaArrowRight/>
                </div>

            </div>
        </div>

        
        {/* <div className='flex'>
            {restaurant.map((res,index) => 
                <div key={index} className='w-[200px] shrink-0' >
                    <img src={"http://localhost:5000/images/"+ res.image} alt={res.name} className='rounded-xl'/>
                </div>

            )}
        </div> */}

        <div className='flex gap-5 overflow-hidden '
            // style={{
            //         transform: `translateX(-${scroll}%)`
            //     }} 
        >
            {restaurant.map((res,index) =>
                <Card key ={index} data={res} p={scroll}/>
            )}
        </div>

        <hr className='my-7 text-gray-300'/>
    </div>
  )
}

export default Restaurants