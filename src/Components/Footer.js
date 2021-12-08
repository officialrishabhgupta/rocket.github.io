import React from 'react';
import {notFound,themesberg,unitedstates} from "../img";
import './Footer.css';

function Footer () {
    return (
        <>
        <div className="footer">
            <div className="foot">
                <div className="wrapper">
                <div className="col-a">
                    <div className="rocket">
                        <img src={notFound} alt="rocket"/>
                        <h4>Rocket</h4>
                    </div>
                    <p1>Create,prototype,collaborate and turn your</p1> <br/><p1> ideas into incredible products with the definitive</p1> <br/><p1> platform for digital design.</p1>
                    <div className="us">
                        <img src={unitedstates} alt="US"/>
                        <h6>United States</h6>
                    </div>
                </div>
                </div>
                <div className="wrap">
                <div className="wrapping">
                <div className="col-b">
                    <h5>Themesberg</h5>
                    <p3>Blog</p3>
                    <p3>Products</p3>
                    <p3>Contact Us</p3>
                </div>
                <div className="col-c">
                    <h5>Rocket</h5>
                    <p3>About</p3>
                    <p3>Pricing</p3>
                    <p3>Documentation</p3>
                    <p3>Contact</p3>
                </div>
                </div>
                <div className="wrapped">
                <div className="col-d">
                    <h5>Subscribe</h5>
                    <p2>The latest Rocket news, articles, and resources, sent <br/> straight to your inbox every month.</p2>
                    <div className="form">
                        <input type="email" className="email" placeholder="Email Address" name="email" required></input>
                        <button className="customButton" type='button' >Subscribe</button>

                    </div>
                    <p3>We'll never share your details. See our Privacy Policy.</p3>

                </div>
                </div>
                </div>
            </div>
            <div className="themesberg">
                <img src={themesberg} alt="themesberg"/>
                <p5>Copyright &copy; Themesberg 2021. All rights reserved.</p5>
            </div>
        </div>
        </>
    );
}

export default Footer;

