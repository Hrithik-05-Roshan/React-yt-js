import React from 'react'

const Card = (details) => {
    return (
        <div className="card">
            <img src={details.img} alt="Profile_picture" />
            <h1>{details.user} - {details.age}</h1>
            {/* <h3>{details.age}</h3> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nam?</p>
            <button>View Profile</button>
        </div>
    )   
}

export default Card
