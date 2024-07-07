import React from 'react'
import profile from "../../images/profile.png"
import "./Profile.css"
function Profile() {

  const getProfile = () =>{
    console.log("get profile");
  }

  return (
    <>
      <div className="profile">
        <img className='profile-img' onClick={getProfile} src={profile} alt="profile_img" />
        <div className="profile-text">
          profile
        </div>
      </div>
    </>
  )
}

export default Profile