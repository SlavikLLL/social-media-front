import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../Data/TrendData'
const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((item,index)=>{
            return(
                <div className="trend" key={index}>
                    <span>#{item.name}</span>
                    <span>{item.shares}k shares</span>
                </div>
                
            )
        })}
    </div>
  )
}

export default TrendCard