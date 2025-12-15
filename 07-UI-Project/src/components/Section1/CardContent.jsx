import React from 'react'
import 'remixicon/fonts/remixicon.css'


const CardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-9 flex flex-col justify-between'>
            <h2 className='h-12  w-12 rounded-full bg-white items-center justify-center flex font-bold text-2xl'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-shadow-2xs leading-normal text-white font-semibold ml-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit aliquid quod nostrum at animi ut?</p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-amber-400 px-6 py-1.5 rounded-full font-semibold text-white '>{props.tag}</button>
                    <button className='bg-amber-400 px-2 py-1 rounded-full font-semibold text-white text-xl '><i class="ri-arrow-right-s-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CardContent
