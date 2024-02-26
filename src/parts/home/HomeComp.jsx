import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router';

function HomeComp({ item }) {
    const navigate = useNavigate()
    let formattedNumber = item.distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const detailPage = e => {
        navigate(`/detail/${item.id}`)
    }
    return (
        <div onClick={detailPage} className='min-h-[100%] flex flex-col'>
            <img className='w-[320px] h-[320px] rounded-[12px]' src={item.images[0]} alt="" />
            <div className='flex items-center justify-between'>
                <h1 className='mt-[8px] font-[500] text-[17px]'>{item.title} ({item.place})</h1>
                <div className='flex items-center  gap-1'>
                    <FaStar />{item.stars.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ",")}
                </div>
            </div>
            <p className='text-[gray] font-[400]'>Расстояние: {formattedNumber} киллометров</p>
            <p className='text-[gray]'>20-26 марта</p>
            <h2 className='flex items-baseline gap-1 font-[500] text-[17px]'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <p className='font-[400] text-[16px]'>ночь</p></h2>
        </div>
    )
}

export default HomeComp