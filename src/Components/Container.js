import React from 'react';
import './Container.css';

function Container () {
    return (
        <>
        <div className="container">
            <div className="row">
                <h1 className="column">
                    <span>Less work , more flow.</span>

                </h1>
                <p>Boost productivity with BrowserSync, Sass changes are reflected instantly and pages <br/>
                     scroll and refresh on devices as you work</p>
            </div>
            <div className="centered">
            <div className="border-box">
                <div className="jquery">
                    <span> >$ npm install</span>
                    <p>Everything's installed</p>
                </div>
                <div className="jquery">
                    <span> > $ gulp</span>
                    <p>SCSS watching<br/>
                    LiveReload started<br/>
                    Opening localhost:3000</p>
                </div>
                <div className="jquery">
                    <span> >$ that's it?</span>
                    <p>It's that simple!</p>
                </div>

            </div>
            </div>
            <h6>Looks unfamiliar? Don't worry! Our Documentation has got you covered.</h6>
            
        </div>
        </>
    )
};

export default Container;
