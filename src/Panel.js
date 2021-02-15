import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './assets/cahs-logo.png';
import OpenIcon from './assets/open.svg';
import CloseIcon from './assets/close.svg';

const Panel = () => {

    const [navOpen, setNavOpen] = useState(true);

    // const { logout } = useAuth();

    // const handleLogOut = () => {
    //     logout();
    // }

    return (
        <>
            <div className={`panel navopen${navOpen}`}>
                <div className='ruby'>
                    <img draggable='false' className='colonize' src={logo} />
                    <h1>cahsmun<br/>campus</h1>
                </div>
                <div className='ice'>
                    <div className='section mo'>
                        {/* Padding for the navigation toggle */}
                    </div>
                    <div className='section'>
                        <h3>main links</h3>
                        <NavLink exact={true} to='/' activeClassName='active' className='panel-link'>campus floor</NavLink>
                        <NavLink to='/conference/information' className='panel-link'>general information</NavLink>
                        <NavLink to='/conference/schedule' className='panel-link'>conference schedule</NavLink>
                    </div>
                    <div className='section'>
                        <h3>resources</h3>
                        <NavLink to='/resources/resolution-paper' className='panel-link'>resolution paper guide</NavLink>
                        <NavLink to='/resources/rules-of-procedure' className='panel-link'>rules of procedure</NavLink>
                        <NavLink to='/resources/crisis-procedure' className='panel-link'>crisis procedure</NavLink>
                    </div>
                    {/* <div className='section'>
                        <h3>more actions</h3>
                        <button onClick={handleLogOut} className='panel-link'>logout</button>
                    </div> /* No login */}
                </div>
            </div>
            <div className='mo-toggle' onClick={(e)=>(setNavOpen((navOpen) ? (false) : (true)))}>
                {(navOpen) ? (
                    <img alt='Close Menu' src={CloseIcon} />
                ) : (
                    <img alt='Open Menu' src={OpenIcon} />
                )}
            </div>
        </>
    );
}

export default Panel;