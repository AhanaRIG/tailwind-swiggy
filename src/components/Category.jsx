import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Category() {
    const [categories, setCategory] = useState([])
    const [scroll, setScroll] = useState(0)

    
    const fetchCategories = async () => {
        const response = await fetch("http://localhost:5000/categories")
        const data = await response.json();
        setCategory(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])  

    const scrollClick = (val ) => {
        val = val*3;
       if(scroll == 0 && val == -300)
        return setScroll(1200)

       if(scroll == 1200 && val == 300)
        return setScroll(0)

       if(scroll>=0)
            return setScroll(scroll+val)

        // if(scroll<1200 && scroll > 0) //normal scrolling
        //     return setScroll(scroll+val)

        // if(scroll == 1200 && val == -100) //should go only backward when reached 1200
        //     return setScroll(scroll+val)

        // if(scroll == 0 && val == 100) // for going only forward when at 0
        //     return setScroll(scroll+val)

    }
    // useEffect(() => {
    //     console.log("scroll",scroll)
    // }, [scroll])
    

    return (
        <div className='max-w-[1200px] mx-auto my-7'>
            <div className='flex items-center justify-between'>
                <div className='font-bold'>What's on your mind?</div>
                <div className='flex items-center '>
                    
                    <div className=' flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
                    onClick={() => scrollClick(-100)} >
                        <FaArrowLeft />
                    </div>

                    <div className=' flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
                    onClick={() => scrollClick(100)}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className='flex overflow-hidden'>
                {categories.map((item,index) =>

                <div key={index} className={`w-[150px] shrink-0 duration-500        cursor-pointer`}
                    style={{
                        transform: `translateX(-${scroll}%)`
                    }}
                >
                    <img src={"http://localhost:5000/images/"+ item.image} />
                    {/* <li className='list-none'>
                        {item.path}
                    </li> */}
                </div>
                    
                )}
            </div>
            
            <hr className='my-7 text-gray-300 '/>
        </div>
        
    )
}

export default Category