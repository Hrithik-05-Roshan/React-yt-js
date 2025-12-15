import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

    const users=[
      {
        img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
        intro:'',
        tag: 'Satified'
      },
      {
        img: 'https://images.unsplash.com/photo-1764520236404-217bf3300ee4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        tag: 'Underserved'
      },
      {
        img: 'https://images.unsplash.com/photo-1558304805-162bb8e59431?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        intro:'',
        tag: 'Unregistered'
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1680303989816-a73f8e8da041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
        intro:'',
        tag: 'Underbanked'
      },
      {
        img: 'https://images.unsplash.com/photo-1575320955581-b48da031bf49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1Nnx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        tag: 'Rescuer'
      },
      {
        img: 'https://images.unsplash.com/photo-1730641884555-db42ff8a574c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExM3x8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        tag: 'Averagegear'
      },
      {
        img: 'https://images.unsplash.com/photo-1585801169545-b15d9bb786e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOXx8fGVufDB8fHx8fA%3D%3D',
        intro:'',
        tag: 'Overexpected'
      }
    ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
} 

export default App