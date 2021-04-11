import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './assets/cahs-logo.png';
import OpenIcon from './assets/open.svg';
import CloseIcon from './assets/close.svg';
import ExternalLink from './assets/external-link.svg';
import ChevronLeft from './assets/chevron-left.svg';

const Panel = () => {
    
    const [opened, setOpened] = useState((window.innerWidth < 1370) ? false : (sessionStorage.getItem('nav') ? (sessionStorage.getItem('nav') === 'true') : true));

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
                    <h1>CAHSMUN<br/>Campus</h1>
                </div>
                <div className='ice'>
                    <div className='section'>
                        <h3>Main Links</h3>
                        <NavLink onClick={e=>hideSide()} exact={true} to='/' className='panel-link'>General Information</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/rooms' activeClassName='active' className='panel-link'>Campus Rooms</NavLink>
                        <NavLink onClick={e=>hideSide()} to='/guide' activeClassName='active' className='panel-link'>Zoom Guide</NavLink>
                        <a href='https://ipc.cahsmun.org/' target="_blank" rel="noreferrer" className='panel-link icon'>
                            IPC Website
                            <img src={ExternalLink} alt='External' />
                        </a>
                    </div>
                    <div className='section'>
                        <h3>Resources</h3>
                        <a href='https://static1.squarespace.com/static/57b632432994cab0b44562ae/t/6070c7526c72440794cbac7b/1618003815421/CAHSMUN+2021+Delegate+Handbook.pdf' target="_blank" rel="noreferrer" className='panel-link icon'>
                            Delegate Handbook
                            <img src={ExternalLink} alt='External' />
                        </a>
                        <a href='https://static1.squarespace.com/static/57b632432994cab0b44562ae/t/5f66c555dc971b47105da274/1600570711528/CAHSMUN+Resolution+Paper+Guide.pdf' target="_blank" rel="noreferrer" className='panel-link icon'>
                            Resolution Paper Guide
                            <img src={ExternalLink} alt='External' />
                        </a>
                        <a href='https://static1.squarespace.com/static/57b632432994cab0b44562ae/t/5f66c580885b214e6f2d2585/1600570757381/CAHSMUN+Rules+of+Procedure+Guide.pdf' target="_blank" rel="noreferrer" className='panel-link icon'>
                            Rules of Procedure
                            <img src={ExternalLink} alt='External' />
                        </a>
                        {/* <a href='https://ipc.cahsmun.org/' target="_blank" rel="noreferrer" className='panel-link icon'>
                            Crisis Procedure
                            <img src={ExternalLink} alt='External' />
                        </a> */}
                    </div>
                    <div className='gap'></div>
                    <div className={`hide ${(opened) ? '' : 'closed'}`}>
                        <div className='left' onClick={e=>toggleSide()}>
                            Hide Navigation
                        </div>
                        <div className={`chevron ${opened ? '' : 'closed'}`} onClick={e=>toggleSide()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Panel;