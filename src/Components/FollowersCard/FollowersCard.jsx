import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>
       {Followers.map((item,index)=>{
        return(      
        <div className="follower" key={index}>
            <div>
                <img src={item.img} alt="" 
                className='followerImg'/>
            
            <div className="name">
                <span>{item.name}</span>
                <span>@{item.username}</span>
            </div>
            </div>
            <button className='button fc-button'>
                Follow
            </button>
        </div>
        )
})}
    </div>
  )
}

export default FollowersCard