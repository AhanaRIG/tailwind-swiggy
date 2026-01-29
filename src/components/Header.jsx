import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoySharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";


function Header() {
    const [toggle, setToggle] = useState(false)

    const showSideMenu= (e) => {
        if(toggle == false){
            setToggle(true)
        }
        else{

            setToggle(false)
        }
    }

    const links = [
        {
            icon: <IoMdSearch/>,
            name: "Search"
        },
        {
            icon: <TbRosetteDiscount/>,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <IoHelpBuoySharp/>,
            name: "Help"
        },
        {
            icon: <FaRegUser/>,
            name: "Sign-in"
        },
        {
            icon: <IoBagOutline />,
            name: "Cart"
        },
    ]

  return (
    <>
        <div onClick={showSideMenu} className='black-overlay w-full h-full fixed duration-500 z-50'
        style={{ 
            opacity: toggle? 1 : 0,
            visibility: toggle? "visible":"hidden"
        }}>
            <div onClick={(e) => e.stopPropagation()} className='w-1/3 h-full bg-white absolute duration-600'
            style={{ 
                left: toggle? "0%" : "-100%"
            }}>

            </div>
        </div>


        <header className='p-3 shadow-xl sticky z-49 top-0 bg-white'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
            <div className=' cursor-pointer w-[30px] ml-2 mr-8'>
                <img src="src\assets\swiggy_icon.png" alt="Swiggy-icon" className='w-full'/>
            </div>

            <div onClick={showSideMenu} className='cursor-pointer' >
                <span className='font-bold border-b-2'>Mecheda</span> West Bengal, India <RxCaretDown onClick={showSideMenu} fontSize={20}className='inline text-[#ff5200] cursor-pointer'/>
            </div>

            <nav className='hidden md:flex gap-11 list-none ml-auto font-semibold'>
                {links.map((link,index) => 
                    <li key ={index} className=' hover:text-[#ff5200] flex items-center gap-1.5 cursor-pointer'>
                        {link.icon}
                        {link.name}
                        <sup className='text-[#FFA600] font-bold'>{link.sup}</sup>
                    </li>

                )}

                

                
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header