import React from 'react'
import 'remixicon/fonts/remixicon.css'
import CardContent from './CardContent'


const Card = (props) => {
  return (
    <div className='h-full w-65 bg-pink-300 shrink-0 relative rounded-4xl overflow-hidden'>
      <img src={props.img} alt="Working_professionals" className='h-full w-full object-cover' />
      <CardContent key={props.key} id={props.id} tag={props.tag} />
    </div>
  )
}

export default Card