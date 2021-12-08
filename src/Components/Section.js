import React from "react";
import {appanalysis, overview,trafficsources, transactions,tasks, userslist, settings,messages, singlemessage} from "../img";
import './Section.css';

function Section() {
    return (
        <>
        <div className="section">
            <h2 >Dashboard pages</h2>
            <div className="bordered">
            <img src={overview} alt="index"/>
            <img src={trafficsources} alt="about"/>
            </div>
            <div className="bordered">
            <img src={appanalysis} alt="indexb"/>
            <img src={userslist} alt="pricing"/>
            </div>
            <div className="bordered">
            <img src={transactions} alt="indexc"/>
            <img src={tasks} alt="team"/>
            </div>
            <div className="bordered">
            <img src={settings} alt="indexd"/>
            <img src={messages} alt="contact"/>
            </div>
            <div className="bordered">
            <img src={singlemessage} alt="terms"/>
            </div>
        </div>
        </>
    );
}

export default Section;
