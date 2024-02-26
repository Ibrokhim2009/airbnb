import React from 'react'
import { MdKitesurfing } from "react-icons/md";
import { PiBuildingsLight } from "react-icons/pi";
import { FaMountainCity } from "react-icons/fa6";
import { PiCastleTurret } from "react-icons/pi";
import './Navbar.css'
import { LuSettings2 } from "react-icons/lu";
import { GiIsland } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md"
import { AiOutlineApartment } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaCaravan } from "react-icons/fa";
import { IoSnowOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function NavbarBottom() {
    const iconsArr = [
        { title: 'Серфинг', image: <MdKitesurfing className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Дизайн', image: <PiBuildingsLight className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Национальные парки', image: <FaMountainCity className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Замки', image: <PiCastleTurret className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Острова', image: <GiIsland className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Каса партикуляр', image: <AiOutlineApartment className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Минсу', image: <BsShop className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
        { title: 'Автодома', image: <FaCaravan className='w-[24px] h-[24px] text-[#717171] hover:text-[black]' /> },
    ]


    return (
        <div className='px-[40px]  h-[80px] shadow-md flex justify-between items-center'>
            <div className='images flex items-center gap-[27px] justify-between w-[70%]'>
                {iconsArr.map((item, index) => (
                    <div key={index} className='hover:text-[black] h-[66px] pb-[8px] hover:border-[solid] hover:border-b-[#8080805d] hover:border-b-[3px] items-center flex flex-col gap-2'>
                        {item.image}
                        <NavLink className={'text-[#717171] text-[14px]'}>
                            {item.title}
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-between w-[35%]'>
                <button className='w-[30px] h-[30px] hover:shadow-[0_0_10px_#8080808d] hover:scale-[1.2] transition duration-100 ml-[10px] rounded-full border-[2px] border-[solid] border-[rgb(0 0 0/0.9] flex items-center justify-center' >
                    < MdNavigateNext />
                </button>
                <button className='px-[16px] py-[13px] border-[1px] rounded-[12px] border-solid border-[#DDDDDD] flex items-center justify-center gap-2'>
                    < LuSettings2 />
                    <p className='text-[12px]'>Фильтры</p>
                </button>
                <button className='px-[16px] gap-[4px] text-[12px] py-[10px] border-[1px] rounded-[12px] border-solid border-[#DDDDDD] flex items-center justify-center'>
                    <p>
                        Показывать итоги(до налогов)
                    </p>
                    <h2 className=' bg-[#bbbbbb] w-9 rounded-full h-6 '>

                        <span className='w-3 h-3 bg-white  text-[15px] text-white  rounded-full mr-3 '>22. </span>
                    </h2>
                </button>
            </div>
        </div>
    )
}

export default NavbarBottom