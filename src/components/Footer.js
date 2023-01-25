import React from "react";

function Footer({id,content}) {
    return (
      <div id="footer">
      <footer id={id}>{content}</footer>
      </div>
    );
}

export default Footer;
