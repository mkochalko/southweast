import React from 'react';

function NavBarMount() {
    const header = document.getElementsByTagName("header")
    $(header).css("background-color", "#2f4cb2")
    const navBarText = document.getElementsByClassName("navbar")
    $(navBarText).css("color", "white")
    $(navBarText).css("background-color", "#2f4cb2")
    //NavBar Link Borders 
    const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
    $(navBarLinkBorder).css("border-right", "2px solid white")
    //NavBar LoggedIn Greeting Border
    const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
    $(navBarLoggedIn).css("border-right", "1px solid white")

    
}

export default NavBarMount