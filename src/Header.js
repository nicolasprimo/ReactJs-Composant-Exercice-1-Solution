import React from 'react';
import './css/header.css';
import Navigation from './Navigation';

class Header extends React.Component{
    render() {
        return(
            <header>
                <Navigation/>
            </header>
        );
    }
}

export default Header;