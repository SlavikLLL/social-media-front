import React from 'react'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import './ProfilePage.css';
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Post from '../../Components/Post/Post'
import RightSide from '../../Components/RightSide/RightSide';

const ProfilePage = () => {
  return (
    <div className="ProfilePage">
        <ProfileLeft />
        <div className="ProfilePage-center">
            <ProfileCard />
            <Post />
        </div>
        <div className="ProfilePage-right">
            <RightSide />
        </div>
    </div>
  )
}

export default ProfilePage