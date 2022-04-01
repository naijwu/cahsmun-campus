import React, { useState, useEffect, useRef } from 'react';

import Panel from './Panel';

const funTime = false;

const Main = () => {

    return (
        <div className='main'>
            <Panel />
            <div className='committees-container'>
                <div className='committees'>
                    <h2>Campus Rooms</h2>
                    {/* <h3>Conference</h3> */}
                    <div className='columns'>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Main Building</h4>
                                <a href='https://youtu.be/V2eFBLv3HvI' target="_blank" rel="noreferrer" className='committee-item'>
                                    Opening Ceremonies
                                </a>
                                <a href='#' className='committee-item'>
                                    Closing Ceremonies
                                </a>
                                <a href='https://us06web.zoom.us/j/6996852074?pwd=RnFBNUNXN3JjQVgxK3ZQWnNoN2VnQT09' target="_blank" rel="noreferrer" className='committee-item'>
                                    Secretariat Desk
                                </a>
                                <a href='https://zoom.us/j/9307153069' target="_blank" rel="noreferrer" className='committee-item'>
                                    Staff Meetings
                                </a>
                                <a href={`${funTime ? 'https://us06web.zoom.us/j/88264017646?pwd=S2xsalFHSUNpV0dpdGZrRWRFeVZxZz09' : '#'}`} target={`${funTime ? '_blank' : ''}`} rel="noreferrer" className={`committee-item funtime ${funTime ? '' : 'disabled'}`}>
                                    Delegate Social
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>General Assemblies</h4>
                                <a href='https://us06web.zoom.us/j/4869983111' target="_blank" rel="noreferrer" className='committee-item'>
                                    DISEC
                                </a>
                                <a href='https://us06web.zoom.us/j/6490309461' target="_blank" rel="noreferrer" className='committee-item'>
                                    SOCHUM
                                </a>
                                <a href='https://us06web.zoom.us/j/2749205480' target="_blank" rel="noreferrer" className='committee-item'>
                                    WHO
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>Regional Bodies</h4>
                                <a href='https://zoom.us/j/2290623899' target="_blank" rel="noreferrer" className='committee-item'>
                                    EAS
                                </a>
                                <a href='https://zoom.us/j/4058311070' target="_blank" rel="noreferrer" className='committee-item'>
                                    C40
                                </a>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Specialized Agencies</h4>
                                <a href='https://zoom.us/j/9158585611' target="_blank" rel="noreferrer" className='committee-item'>
                                    UNDP
                                </a>
                                <a href='https://zoom.us/j/95871231805' target="_blank" rel="noreferrer" className='committee-item'>
                                    UN Women
                                </a>
                                <a href='https://zoom.us/j/91350718741' target="_blank" rel="noreferrer" className='committee-item'>
                                    UNSC
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>Crisis Committees</h4>
                                <a href='https://zoom.us/j/9349389082' target="_blank" rel="noreferrer" className='committee-item'>
                                    JCC Bloc A (Russia)
                                </a>
                                <a href='https://zoom.us/j/81965072979' target="_blank" rel="noreferrer" className='committee-item'>
                                    JCC Bloc B (Sweden)
                                </a>
                                <a href='https://zoom.us/j/9815916511' target="_blank" rel="noreferrer" className='committee-item'>
                                    HCC
                                </a>
                                <a href='https://zoom.us/j/7622141834' target="_blank" rel="noreferrer" className='committee-item'>
                                    FCC
                                </a>
                                <a href='https://zoom.us/j/95136989256' target="_blank" rel="noreferrer" className='committee-item'>
                                    ECC
                                </a>
                                <a href='https://zoom.us/j/5802874946' target="_blank" rel="noreferrer" className='committee-item'>
                                    IPC
                                </a>
                                <a href='https://zoom.us/j/98253940038' target="_blank" rel="noreferrer" className='committee-item'>
                                    Business
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Main;