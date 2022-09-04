import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const NavTabs = () => {
    return(
    <div className="container-fluid">
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home" id="tabHome" >
        this is the home page
      </Tab>
      <Tab eventKey="profile" title="Profile">
        this is the second temporary page
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        this is a temporary page
      </Tab>
    </Tabs>
    </div>)
}

export default NavTabs