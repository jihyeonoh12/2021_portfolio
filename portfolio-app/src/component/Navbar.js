import '../styles/navbar.css';
import React from 'react';

class Navbar extends React.Component {
    render() {
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " responsive";
            } else {
              x.className = "topnav";
            }
          }
    return (
        <div className="navbar">
            <div className="topnav" id="myTopnav">
                <a href="#home" className="navbar_logo">Jane N Design</a>
                <div className="navbar_menu">
                <a href="#news">About</a>
                <div class="navbar_dropdown">
                    <button className="dropbtn">Work<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                    <a href="#">Digital Design</a>
                    <a href="#">Print Design</a>
                    <a href="#">Coding</a>
                    </div>
                </div>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
            </div>
        </div>
    )
    }
}

export default Navbar