import React from 'react'
import { FaAngleRight, FaChevronRight } from 'react-icons/fa'
import { MdChevronRight } from 'react-icons/md'

function DetailDeacription({ dataDescription }) {

    return (
        <div className=' mt-[32px]'>
            <div className='w-[653px]  h-[50px]  flex items-center rounded-lg pl-[16px] bg-[#f7f7f7]'>
                <p className='text-[17px]'>Часть информации переведена автоматически.<a href="" className='font-[500] text-[17px] underline'> Показать оригинал</a></p>
            </div>
            <p className=' w-[652px] mt-[32px] text-[17px]'>{dataDescription}</p>
            <div className='underline cursor-pointer flex items-center mt-[12px]'>
                <p className='text-[18px] text-[black] font-[500]'>Показать еще</p>
                <FaAngleRight />
            </div>
        </div>
    )
}

export default DetailDeacription