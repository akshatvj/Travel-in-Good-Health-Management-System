import React from 'react';
import "./LogOutButton.css";
import {Button} from "antd";

export default function LogOutButton(){
    const LogOut = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = '';
    }

    return (
        <span className="logout-btn">
            <Button type="primary" onClick={LogOut}>Log out</Button>
        </span>
    )
}