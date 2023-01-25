import React from "react";

function Header({id,content}) {
    return (
        <div id="header">
        <header id={id}>{content}</header>
        </div>
    );
}

export default Header;

