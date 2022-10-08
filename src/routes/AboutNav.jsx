import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import '../index.css';

const AboutNav=()=>{

    const location = useLocation()
    return <div className="about-nav">
        <ul className="dev-team">
            <li>
                <div className={location.pathname==='/about/carlos'?'dev_active':'dev_inactive'} >
                    <Link to="/about/carlos" className={location.pathname==='/about/carlos'?'home_active':'home_inactive'}  style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Carlos</p>
                        <img className="picture" src={require('../img/carlos.jpeg')} />
                    </Link>
                </div>
            </li>
            <li>
                <div className={location.pathname==='/about/clara'?'dev_active':'dev_inactive'} >
                    <Link to="/about/clara" className={location.pathname==='/about/clara'?'home_active':'home_inactive'} style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Clara</p>
                        <img className="picture" src={require('../img/clara.jpg')} />
                    </Link>
                </div>
            </li>
            <li>
                <div className={location.pathname==='/about/phil'?'dev_active':'dev_inactive'}>
                    <Link to="/about/phil" className={location.pathname==='/about/phil'?'home_active':'home_inactive'} style={{textDecoration: 'none', color:'black'}} >
                        <p className="names">Phil</p>
                        <img className="picture" src={require('../img/phil.jpg')} />
                    </Link>
                </div>
            </li>
        </ul>
        <Outlet />
    </div>;
}

export default AboutNav;