import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../index.css';

const AboutNav=()=>{

    const location = useLocation()
    return <div className="about-nav">
        <ul className="dev-team">
            <li>
                <div className="dev-team-card" >
                    <Link to="/about/carlos" className="about-link" style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Carlos</p>
                        <img className="picture" src={require('../img/logo.png')} />
                    </Link>
                </div>
            </li>
            <li>
                <div className="dev-team-card" >
                    <Link to="/about/clara" className="about-link" style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Clara</p>
                        <img className="picture" src={require('../img/logo.png')} />
                    </Link>
                </div>
            </li>
            <li>
                <div className="dev-team-card" >
                    <Link to="/about/phil" className="about-link" style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Phil</p>
                        <img className="picture" src={require('../img/logo.png')} />
                    </Link>
                </div>
            </li>
        </ul>
    </div>;
}

export default AboutNav;