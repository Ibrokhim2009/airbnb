import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function DetailSticky({ data }) {
    const oralyPrice = data.price * 5
    return (
        <div className='w-[372px] sticky mt-[40px] top-[30px] left-[800px] h-[432px] p-[24px] bg-[white] shadow-[1px_1px_15px_#8080808d] rounded-xl'>
            <h1 className='flex mb-[24px] items-baseline gap-1 font-[500] text-[#222222] text-[22px]'>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}Р <p className='text-[16px] text-[#222222] font-[400]'>ночь</p></h1>
            <div className='border-[1px] border-solid border-[gray] h-[112px] w-[100%] rounded-[8px]'>
                <div className='flex items-center border-b-[1px] border-solid border-[gray]'>
                    <div className='flex flex-col w-[161px] pl-[12px] text-[14px] justify-center border-r-[1px] border-solid border-[gray] h-[56px]'>

                        <p className='font-[500] text-[#313131]'>прибытие</p>
                        <h1>
                            {data.comming}
                        </h1>
                    </div>
                    <div className='flex flex-col pl-[12px] text-[14px] justify-center h-[56px]'>

                        <p className='font-[500] text-[#313131]'>выезд</p>
                        <h1>
                            {data.departing}
                        </h1>
                    </div>
                </div>
                <div className='pl-[12px] pr-[24px] flex items-center justify-between'>
                    <div className='flex flex-col '>
                        <p className='text-[16px]'>для кого</p>
                        <span className='text-[14px]'>1 гость</span>
                    </div>
                    <MdOutlineKeyboardArrowDown className='text-[29px]' />
                </div>
            </div>
            <button className='mt-[16px] w-[100%] h-[50px] bg-[#f4294f] text-[17px] rounded-[10px] font-medium text-white'>
                Забронировать
            </button>
            <p className='my-[12px] text-[14px] text-[#222222] flex items-center justify-center'>Пока вы ни за что не платите</p>
            <div>
                <div className='flex items-center justify-between mb-[16px]'>
                    <p className='text-[16px]
                    text-[#222222]  underline font-[400]'>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} x 5 ночей </p>
                    <span className='text-[16px] font-[400]'>{oralyPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                </div>
                <div className='flex items-center justify-between mb-[16px]'>
                    <p className='text-[16px] underline'>Сервисный сбор Airbnb</p>
                    <span>{data.serviceMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                </div>
            </div>
            <hr />
            <div className='flex text-[16px] mt-[12px] font-[500] items-center justify-between'>
                <h1>Всего (без учета налогов)</h1>
                <p>{data.withoutMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        </div>
    )
}

export default DetailSticky