import React, { useState, useRef, useEffect } from "react";
import "./BackgroundPicture.css";
 
import BackgroundPicture from "../../Images/Background.png";




const BackgroundPic = (props) => {

    const[bpic, setbPic] = useState(BackgroundPicture);


    const handleChange = (e) => {
                const[file] = e.target.files;
                setbPic(URL.createObjectURL(file));
            };
    


  return (
    <>
    <label for="imageb">
      <input onChange={(e) => handleChange(e) } type="file" name="imageb" id="imageb" style={{display: "none"}}/>
      <img id = "backgroundImage" src={bpic}/>
   </label>
   </>
    )
};


    
   


export default BackgroundPic;