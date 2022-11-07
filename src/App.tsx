import React from 'react';
import './App.css';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Remote from "./remote/Remote";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Navbar from "./nav/Nav";

function App() {
    return (
        <div className="App">
            <Navbar/>


            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
