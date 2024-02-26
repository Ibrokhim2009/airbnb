import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import { FaAirbnb } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { CiGlobe, } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
const NavbarMiddle = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='h-[100px] border px-[40px] flex items-center justify-center gap-[220px]'>
            <button className='text-[32px] flex  items-center  text-[#FF385C] font-[600]'>
                <FaAirbnb color='red' />
                <p>airbnb</p>
            </button>
            <div className='flex items-center ml-[60px] shadow-[1px_1px_6px_#DDDDDD] hover:shadow-[1px_1px_10px_gray] transition-all h-[48px] rounded-[24px] justify-between px-[8px] border'>
                <p className='h-[22px] border-r px-[16px] font-[500]'>Искать везде</p>
                <p className='h-[22px] border-r px-[16px] font-[500]'>Неделя</p>
                <div className='pl-[16px] flex items-center gap-2'>
                    <p className='text-[16px] text-[gray] font-[400]'>Кто едет?</p>
                    <div className='bg-[#ff385c]  w-[32px] h-[32px] rounded-full flex items-center justify-center'>
                        <IoSearch color='white' />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-[14px] font-[600] w-[183px] h-[47px] flex items-center justify-center transition-all rounded-[24px] hover:bg-[#8080801e]'>Сдать жилье на Airbnb</p>
                <button className='text-[19px] hover: w-[46px] h-[42px] transition-all rounded-[24px] hover:bg-[#8080801e] flex items-center justify-center'><CiGlobe /></button>
                <div className='w-[83px] flex items-center hover:shadow-lg transition-all justify-center gap-2 text-[32px] h-[48px] border-[1px] border-[solid] border-[#DDDDDD] rounded-[30px]' >
                    <RiMenuLine fontSize={'20px'} />
                    <RxAvatar color='gray' />
                </div>

            </div>
        </div>
    );
};

export default NavbarMiddle;
