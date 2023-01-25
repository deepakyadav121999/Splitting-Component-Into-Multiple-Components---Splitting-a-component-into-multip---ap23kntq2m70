import React from "react";

function Header(props) {
    return (
        <div id="header">
        <header id={props.id}>{props.content}</header>
        </div>
    );
}

export default Header;

