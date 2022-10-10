import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostData'
import PostItem from '../PostItem/PostItem'

const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((item,index)=>{
            return(
                <PostItem data={item} id={index}/>
            )
        })}
    </div>
  )
}

export default Posts