import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './assets/cahs-logo.png';
import OpenIcon from './assets/open.svg';
import CloseIcon from './assets/close.svg';
import ExternalLink from './assets/external-link.svg';
import ChevronLeft from './assets/chevron-left.svg';

const Panel = () => {
    
    const [opened, setOpened] = useState((window.innerWidth < 1370) ? false : (sessionStorage.getItem('nav') === 'true'));

    useEffect(() => {

        let r = document.querySelector(':root');

        if (opened) {
            // state when slider is open
            r.style.setProperty('--panel-margin', '300px');
            sessionStorage.setItem('nav', 'true');
        } else {
            // state when slider is not open
            r.style.setProperty('--panel-margin', '0px');
            sessionStorage.setItem('nav', 'false');
        }

    }, [opened]);

    function toggleSide() {

        if(opened) {
            // if currently opened -- close
            setOpened(false);
        } else if(!opened) {
            // if currently closed -- open
            setOpened(true);
        }
        
    }

    function hideSide() {
        if(window.innerWidth < 1370) {
            setOpened(false);
        }

    }

    return (
        <>
            <div className={`panel navopen${opened ? '' : 'closed'}`}>
                <div className='ruby'>
                    <img draggable='false' className='colonize' src={logo} alt='logo' />
                    <h1>cahsmun<br/>campus</h1>
                </div>
                <div className='ice'>
                    <div className='section'>
                        <h3>main links</h3>
                        <NavLink onClick={e=>hideSide()} exact={true} to='/' activeClassName='active' className='panel-link'>campus floor</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/conference/information' className='panel-link'>general information</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/conference/schedule' className='panel-link'>conference schedule</NavLink>
                        <a href='https://ipc.cahsmun.org/' target="_blank" rel="noreferrer" className='panel-link icon'>
                            ipc website
                            <img src={ExternalLink} alt='External' />
                        </a>
                    </div>
                    <div className='section'>
                        <h3>resources</h3>
                        <NavLink onClick={e=>hideSide()} to='/resources/resolution-paper' className='panel-link'>resolution paper guide</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/resources/rules-of-procedure' className='panel-link'>rules of procedure</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/resources/crisis-procedure' className='panel-link'>crisis procedure</NavLink>
                    </div>
                    <div className='gap'></div>
                    <div className={`hide ${(opened) ? '' : 'closed'}`}>
                        <div className='left' onClick={e=>toggleSide()}>
                            hide navigation
                        </div>
                        <div className={`chevron ${opened ? '' : 'closed'}`} onClick={e=>toggleSide()}>
                            <img src={ChevronLeft} alt='Chevron Left' />
                        </div>
                    </div>
                    {/* <div className='section'>
                        <h3>more actions</h3>
                        <button onClick={handleLogOut} className='panel-link'>logout</button>
                    </div> /* No login */}
                </div>
            </div>
        </>
    );
}

export default Panel;