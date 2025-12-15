import React from 'react'
import HeroText from './HeroText';
import Arrow from './Arrow';

const RightContent = () => {
  return (
    <div className='h-full w-1/3 text-black flex justify-between flex-col'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default RightContent
