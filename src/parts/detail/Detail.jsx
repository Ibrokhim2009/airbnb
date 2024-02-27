import React from 'react'
import { useParams } from 'react-router'
import { products } from '../../datas'
import NavbarMiddle from '../navbar/NavbarMiddle'
import detailImg from '../../assets/datail.svg'
import { RiInstallLine } from 'react-icons/ri'
import { CiHeart } from 'react-icons/ci'
import DetailSticky from './DetailSticky'
import { FaStar } from 'react-icons/fa'
import DetailFacibilities from './DetailFacibilities'
import DetailDeacription from './DetailDeacription'
function Detail() {
    const { id } = useParams()
    const detailData = products.find(item => item.id == id)
    console.log(detailData)
    return (
        <>
            <NavbarMiddle />
            <div className='px-[40px] flex flex-col items-stretch justify-between pb-[100px] mt-[25px]'>
                <div className='mb-[15px] flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[24px] h-[24px]' src={detailImg} alt="" />
                        <p className='text-[26px] font-[500]'>{detailData.detailName}</p>
                    </div>
                    <div className='flex gap-2'>
                        <button className='flex items-center justify-center gap-1 p-2 hover:bg-[#8080801b   ] rounded-[8px]'><RiInstallLine className='w-[20px] h-[20px] ' /> <p className=' font-semibold text-[16px] underline'>Поделиться</p></button>
                        <button className='flex items-center justify-center gap-1 p-2 hover:bg-[#8080801b] rounded-[8px]'><CiHeart className='w-[20px] h-[20px] ' /><p className=' font-semibold text-[16px] underline'>Сохранить</p></button>
                    </div>
                </div>



                <div className='flex items-center w-[100%]  justify-center   gap-[12px]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='h-[400px] rounded-l-[14px] ' src={detailData.images[0]} alt="" />
                        <div className='flex flex-col gap-[10px]'>
                            <div className='flex items-center gap-[10px]'>
                                <img className=' h-[195px] w-[100%] ' src={detailData.images[1]} alt="" />
                                <img className=' h-[195px] w-[100%] rounded-tr-[10px] ' src={detailData.images[2]} alt="" />
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <img className=' h-[195px] w-[100%]' src={detailData.images[3]} alt="" />
                                <img className=' h-[195px] w-[100%] rounded-br-[10px]' src={detailData.images[4]} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between'>

                    <div className='py-[32px] '>
                        <h1 className='text-[26px] font-[500] text-[#222222]'>{detailData.secondName}, {detailData.title}, {detailData.place}</h1>
                        <div className='text-[18px] text-[#222222]'>
                            {detailData.guests} гостей . {detailData.bedroom} спальни . {detailData.bed} кравати . {detailData.bathroom} ванной
                        </div>
                        <div className='flex mb-[32px] gap-[16px] items-center'>
                            <div className='flex items-center gap-1'>
                                <FaStar />
                                <h3 className='text-[17px] font-[600] text-[#222222]'>
                                    {detailData.stars}
                                </h3>
                            </div>
                            <p className='underline text-[17px] flex items-center gap-[8px] text-[#222222] font-[500]'>
                                {detailData.reviews} отзывов
                            </p>
                        </div>
                        <div className='w-[651px] mb-[24px] h-[1px] bg-[#8080803f]'></div>
                        <div className='flex items-center gap-5 mb-[24px]'>
                            <img className='w-[40px] h-[40px] rounded-full' src={detailData.ownerImg} alt="" />
                            <div className='flex flex-col'>
                                <h1 className='text-[16px] text-[#222222] font-[600]'>
                                    Хозяин: {detailData.owner}
                                </h1>
                                <p className='text-[#717171]'>2 года принимает гостей</p>
                            </div>

                        </div>
                        <div className='w-[651px] h-[1px] bg-[#8080803f]'></div>
                        <DetailFacibilities />
                        <div className='w-[651px] mb-[24px] h-[1px] bg-[#8080803f]'></div>
                        <DetailDeacription dataDescription={detailData.desctiption} />
                    </div>
                    <DetailSticky data={detailData} />
                </div>
            </div>
        </>
    )
}

export default Detail