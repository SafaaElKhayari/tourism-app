import React from 'react'
import headerProfilePic from '../../assets/header-profile.jpg'
import avatarMix from '../../assets/avatar-mix.png'
import Avatar from '@material-ui/core/Avatar';
import {MdEdit  } from "react-icons/md";
import { useState,useContext} from 'react';
import UserContext from '../../Context/user'




function HeaderProfile() {

  const [showModal,setShowModal]=useState(false); 
  const {user} = useContext(UserContext);
  console.log(user.id)
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.userName);
 
    return (
        <div class="card  text-white card-profile">
          <img src={headerProfilePic} class="card-img img-profile" alt="..."/>
        <Avatar alt="avatar" src={avatarMix} class="avatar-profile" />
          <div class="container-sm">
                <h1 className="name-profile">{name}</h1>
                 <h3 className="email-profile">{email}</h3> 
                 <button onClick={()=>{setShowModal(true)}} className="btn-profile" type="button" data-bs-toggle="modal" data-bs-target="#Modal"><MdEdit/> Edit</button>
                
                
                { showModal &&
                  
                  <div class="modal modal-profile" id="Modal" tabindex="-1" aria-labelledby="Label" aria-hidden="true">
      
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title modal-title-edit" id="Label"><MdEdit/> Edit Profile</h5>
                          <button type="button" onClick={()=>{setShowModal(false)}}  class="btn-close btn-close-profile" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input type="text" className="form-control" 
                        value={name}
                        onChange={(e)=>{
                          setName(e.target.value);
                        }}
                        />
                        <br />
                        <input type="text" className="form-control" value= {email}
                        onChange={(e)=>{
                          setEmail(e.target.value);
                        }}
                        
                        />
                          
                        </div>
                        <div class="modal-footer">
                          <button  onClick={()=>{setShowModal(false)}} type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                          <button  onClick={()=>{setShowModal(false)}}  type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>


                } 
          </div>
          
</div>
    )
}

export default HeaderProfile
