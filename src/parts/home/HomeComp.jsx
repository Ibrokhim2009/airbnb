import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router';
import './Home.css'
import { MdKeyboardArrowLeft, MdOutlineNavigateNext } from 'react-icons/md';
function HomeComp({ item }) {
    const navigate = useNavigate()
    const [slider, setSlider] = useState(0)
    const [hovered, setHovered] = useState(false)
    let formattedNumber = item.distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const detailPage = e => {
        navigate(`/detail/${item.id}`)
    }
    const imagediv = {
        width: '320px',
        height: '320px',
        borderRadius: '12px',
        background: `url(${item.images[slider]})`
    }

    return (
        <div onClick={detailPage} className='min-h-[100%] flex flex-col'>
            <div style={imagediv}>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='mt-[8px] font-[500] text-[17px]'>{item.title} ({item.place})</h1>
                <div className='flex items-center  gap-1'>
                    <FaStar />{item.stars}
                </div>
            </div>
            <p className='text-[gray] font-[400]'>Расстояние: {formattedNumber} киллометров</p>
            <p className='text-[gray]'>20-26 марта</p>
            <h2 className='flex items-baseline gap-1 font-[500] text-[17px]'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} <p className='font-[400] text-[16px]'>ночь</p></h2>
        </div>
    )
}

export default HomeComp