import React from "react";

function Header({id,content}) {
    return (
       <div className="main" id={id}>
        <h1>{content}</h1>
           </div>
    
    );
}

export default Header;

