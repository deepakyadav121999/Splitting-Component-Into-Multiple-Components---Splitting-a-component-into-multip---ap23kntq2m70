import React from "react";

function Main({id,content}) {
    return (
        <div id="main">
        <main id={id}>{content}</main>
        </div>
    );
}

export default Main;


