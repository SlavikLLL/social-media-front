import React from 'react'
import Post from '../../Components/Post/Post'
import Profile from '../../Components/Profile/Profile'
import RightSide from '../../Components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
    <Profile />
    <Post />
   <RightSide />
    </div>
  )
}

export default Home