import React from "react";
import { notFound,mockuppresentation,themesberg } from "../img";
import "./Home.css";

function Home() {
    return(
        <>
        <div className="row">
        <div className="center">
         <img src={notFound} alt="notFound" />
         <h1 className="display">Rocket</h1>
         <h2 className="text">Bootstrap Startup Dashboard Template </h2>
         <div className="flex">
         <button className="customButton" type='button' >Front-page</button>
          <button className="classicButton" type='button'>Dashboard</button>
         </div>
         <div className="flexbox">
             <img src={themesberg} alt="themesberg"/>
             <div className="berg">
             <span className="box" >A Themesberg production</span>
             </div>
         </div>
        </div>
        </div>
        <div className="grid">
            <div className="block">
            <img src={mockuppresentation} alt="mock"/>
            </div>
            <div className="section-text">
                <h1>36 hand-crafted pages</h1>
                <p>Every page from Rocket has been carefully built to provide all the<br/>
                    necessary pages your startup will require
                    </p>
            </div>
        </div>
        </>
    )
};

export default Home;