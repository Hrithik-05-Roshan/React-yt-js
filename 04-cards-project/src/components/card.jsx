import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.logo} alt="" />
                    <button>Save<Bookmark size={15} /></button>
                </div>

                <div className="center">
                    <h4>{props.company} <span>{props.timeline}</span></h4>
                    <h2>{props.jobpost}</h2>
                    <div className='tag'>
                        <h4>{props.id}</h4>
                        <h4>{props.exp}</h4>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h2>{props.salary}</h2>
                    <p>{props.place}</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}

export default card
