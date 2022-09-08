import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import MyModal from "../Modal/Modal";

const MyCalendar = () => {
    const [value, onChange] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);

    let openModal = (e) => {
        onChange(e);
        setIsOpen(true);
        console.log("worked")
    }
    
    
    

    return (
        <div>
            <Calendar onChange={(e) => openModal(e)}  value={value} />
            {isOpen ? <MyModal /> : null}
        </div>
    );
}

export default MyCalendar;