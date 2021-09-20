import React from 'react'
import headerProfilePic from '../../assets/header-profile.jpg'
import avatarMix from '../../assets/avatar-mix.png'

import Avatar from '@material-ui/core/Avatar';
import {MdEdit  } from "react-icons/md";



function HeaderProfile() {
    return (
        <div class="card  text-white card-profile">
          <img src={headerProfilePic} class="card-img img-profile" alt="..."/>
        {/* <div class="card-img-overlay">
        <h1 className="name-profile">Safaa El Khayari <br /> <span>safaa.dk.199@gmail.com</span>  </h1>
        </div> */}
          <Avatar alt="avatar" src={avatarMix} class="avatar-profile" />
          <div class="container-sm">
                <h1 className="name-profile">Safaa El Khayari</h1>
                 <h3 className="email-profile">safaa.dk.1999@gmail.com</h3> 
                 <button className="btn-profile"><MdEdit/> Edit</button>
          </div>
          
</div>
    )
}

export default HeaderProfile
