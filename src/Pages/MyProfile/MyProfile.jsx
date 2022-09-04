import React from 'react';
import ProfilePic from '../../Components/ProfilePicture/ProfilePicture';
import './MyProfile.css';
import BackgroundPic from '../../Components/BackgroundPicture/BackgroundPicture';
import MyCalendar from '../../Components/Calendar/Calendar';

const MyProfile = () => {
    return (
    <>
        <div id = "bkg" >
            <BackgroundPic />
            <div id = "myProfile-profilePic">
                <ProfilePic />
            </div>
        </div>
        <div className="container">
            <div className='row'>
                <div className='col-8'>
                    About Me
                </div>
                <div className='col-4'>
                    <MyCalendar />
                </div>      
            </div>
        </div>
    </>
    );
}

export default MyProfile;