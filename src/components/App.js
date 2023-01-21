import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            {/* <header id="my-header">This is the header</header>
            <main id="my-main">This is the main</main>
            <footer id="my-footer">This is the footer</footer> */}
            <Header id="header" content="This is the header"/>
            <Main id="main" content="This is the main"/>
            <Footer id="footer"  content="This is the footer"/>

            
        </div>
    );
}

export default App;
