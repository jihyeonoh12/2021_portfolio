
import React from 'react';
import Card from './Card'
import '../styles/body.css';
import logo from '../logo.svg';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Card image={logo}/>
                <Card />
                <Card />
                <Card image={logo}/>
            </div>
        )

    }
}

export default Body