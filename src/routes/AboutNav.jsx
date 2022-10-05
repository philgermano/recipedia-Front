import React from "react";
import { Link, useLocation } from "react-router-dom";

const AboutNav=()=>{

    const location = useLocation()
    return <div className="about-nav">
        <Link to="/about/carlos" className={location.pathname==='/about/carlos'?'tab_active':'tab_inactive'}>Carlos</Link>
        <Link to="/about/clara" className={location.pathname==='/about/clara'?'tab_active':'tab_inactive'}>Clara</Link>
        <Link to="/about/phil" className={location.pathname==='/about/phil'?'tab_active':'tab_inactive'}>Phil</Link>
    </div>;
}

export default AboutNav;