import React, { useState, useRef, useEffect } from "react";
import "./ProfilePicture.css";
 
import ProfilePicture from "../../Images/ProfilePic.png";




const ProfilePic = (props) => {

    const[pic, setPic] = useState(ProfilePicture);


    const handleChange = (e) => {
                const[file] = e.target.files;
                setPic(URL.createObjectURL(file));
            };
    


  return (
    <>
    <label for="image">
      <input onChange={(e) => handleChange(e) } type="file" name="image" id="image" style={{display: "none"}}/>
      <img id = "profileImage" src={pic}/>
   </label>
   </>
    )
};


    
   


export default ProfilePic;