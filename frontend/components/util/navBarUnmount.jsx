import React from 'react';

function NavBarUnmount() {

    const header = document.getElementsByTagName("header")
    $(header).css("background-color", "transparent")
    const body = document.getElementsByTagName("body");
    $(body).css("background", "transparent")
    const navBarText = document.getElementsByClassName("navbar")
    $(navBarText).css("color", "#304CB2")
    $(navBarText).css("background-color", "transparent")
    const navBarLinkBorder = document.getElementById("navbar-links").getElementsByTagName("li")
    $(navBarLinkBorder).css("border-right", "2px solid blue")
    const navBarLoggedIn = document.getElementsByClassName("logged-in-account-link")
    $(navBarLoggedIn).css("border-right", "1px solid blue")

}

export default NavBarUnmount;