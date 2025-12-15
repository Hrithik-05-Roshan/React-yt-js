import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 flex items-center gap-10 h-[90vh]'>
      <RightContent />
      <LeftContent users={props.users}/>
    </div>
  )
}

export default Page1Content 