import React from 'react'
import { products } from '../../datas'
import HomeComp from './HomeComp'

function Home() {
    return (
        <div className='flex items-center justify-center'>
            <div className='px-[40px] grid grid-cols-4 gap-[20px] gap-y-[30px] pb-[50px] '>
                {products.map(item => <HomeComp item={item} />)}
            </div>
        </div>
    )
}

export default Home