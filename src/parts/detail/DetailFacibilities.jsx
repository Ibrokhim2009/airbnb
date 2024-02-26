import React from 'react'
import { CiDesktop } from 'react-icons/ci'
import { LuDoorClosed } from 'react-icons/lu'
import { PiDoorLight, PiNotebookThin } from 'react-icons/pi'

function DetailFacibilities() {
    return (
        <div className='pb-[32px] mt-[24px] flex flex-col gap-6'>
            <div className='flex items-center justify-start gap-[30px]'>
                <CiDesktop className='w-[24px] h-[24px]' />
                <div className='flex items-start flex-col'>
                    <p className='font-[500] text-[18px] text-[#222222]'>Рабочая зона</p>
                    <span className='text-[15px] text-[#717171]'>Комната с Wi-Fi, которая хорошо подходит для работы.</span>
                </div>
            </div>
            <div className='flex items-center justify-start gap-[30px]'>
                <PiDoorLight className='w-[24px] h-[24px]' />
                <div className='flex items-start flex-col'>
                    <p className='font-[500] text-[18px] text-[#222222]'>Самостоятельное прибытие</p>
                    <span className='text-[15px] text-[#717171]'>Персонал в здании встретит вас по прибытии.</span>
                </div>
            </div>
            <div className='flex items-center justify-start gap-[30px]'>
                <PiNotebookThin className='w-[24px] h-[24px]' />
                <div className='flex items-start flex-col'>
                    <p className='font-[500] text-[18px] text-[#222222]'>Бесплатная отмена до 16 мая</p>
                </div>
            </div>
        </div>
    )
}

export default DetailFacibilities