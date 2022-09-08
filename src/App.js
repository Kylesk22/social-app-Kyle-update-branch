import React from 'react';
import './bootstrap.min (2).css';
import './index.css';
import SpotterNav from './Components/Navbar/Navbar';
import ProfilePic from './Components/ProfilePicture/ProfilePicture';
import NavTabs from './Components/Navbar/NavTabs';
import MyProfile from './Pages/MyProfile/MyProfile';
import Nutrition from './Pages/Nutrition/Nutrition';
import Home from './Pages/Home/Home';


function App() {
  let selectPage;
  switch(window.location.pathname) {
    case "/Home":
    selectPage = <Home />
    break;
    case "/MyProfile":
    selectPage = <MyProfile />;
    break;
    case "/Nutrition":
    selectPage = <Nutrition />
  }
  return (
    <div className="App" id="App">
        <SpotterNav />
        <div className="body-content">
        {selectPage}
        {/* <ProfilePic />
        <NavTabs /> */}
        </div>
        
    </div>
  );
}

export default App;
