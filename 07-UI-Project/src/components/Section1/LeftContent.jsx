import React from 'react'
import Card from './Card'


const LeftContent = (props) => {
  return (
    <div id='left' className='h-full w-7/10 overflow-x-auto flex-nowrap rounded-xl bg-white flex gap-3 px-4 mb-9'>
      {props.users.map(function(elem, i) {
        return <Card key={i} id={i} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}


export default LeftContent 