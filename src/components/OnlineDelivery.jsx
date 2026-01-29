import React, { useEffect, useState } from 'react'
import Card from './Card';
// 
function OnlineDelivery() {
    const [restaurant, setRestaurant] = useState([])

    async function getRestaurants (){
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const data = await response.json();
        setRestaurant(data)
    }

    useEffect(() => {
        getRestaurants();
    },[])
    
  return (
    <div className='mx-auto max-w-[1200px]'>
        <div className='flex w-full justify-between'>
            <h1 className='font-bold text-2xl mb-6'>Restaurants with Online Delivery in Mecheda</h1>
            
        </div>

        {/* Our technique using flex */}
        {/* <div className='flex flex-wrap gap-5'>
            {restaurant.map((res,index) => 
                <div key={index} className='max-w-[273px]'>
                    <Card data={res}/>
                </div>
            )}
        </div> */}

        {/* Using Grid */}

        <div className='grid grid-cols-4 gap-3 '>
            {restaurant.map((res,index) => 
                // <div key={index} >
                    <Card data={res} key={index}/>
                // </div>
            )}
        </div>
        
        

        
    </div>
  )
}

export default OnlineDelivery