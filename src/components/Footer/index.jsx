import logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import React from "react";


export default class Footer extends React.Component {
    render() {
        
        return (
            <div>
                <Link to='/'>
                    <img src={logo} alt="logo Kasa" />
                </Link>
                <span>
                © 2023 Kasa. All rights reserved
                </span>
            </div>
        )
    }
}