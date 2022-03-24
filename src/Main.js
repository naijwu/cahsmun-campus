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
                                <a href='https://youtu.be/MNY4Dxkjq0A' target="_blank" rel="noreferrer" className='committee-item'>
                                    Opening Ceremony
                                </a>
                                <a href='https://www.youtube.com/watch?v=Fe3wCb6hJrM&ab_channel=CAHSMUN' target="_blank" rel="noreferrer" className='committee-item'>
                                    Closing Ceremony
                                </a>
                                <a href='https://zoom.us/j/93186871423' target="_blank" rel="noreferrer" className='committee-item'>
                                    Secretariat Desk
                                </a>
                                <a href='https://zoom.us/j/9307153069' target="_blank" rel="noreferrer" className='committee-item'>
                                    Staff Room
                                </a>
                                <a href={`${funTime ? 'https://zoom.us/j/94205566796' : '#'}`} target={`${funTime ? '_blank' : ''}`} rel="noreferrer" className={`committee-item funtime ${funTime ? '' : 'disabled'}`}>
                                    Delegate Social
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>General Assemblies</h4>
                                <a href='https://zoom.us/j/94930811730' target="_blank" rel="noreferrer" className='committee-item'>
                                    DISEC
                                </a>
                                <a href='https://zoom.us/j/97276845784' target="_blank" rel="noreferrer" className='committee-item'>
                                    SOCHUM
                                </a>
                                <a href='https://zoom.us/j/97706190967' target="_blank" rel="noreferrer" className='committee-item'>
                                    WHO
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>Regional Bodies</h4>
                                <a href='https://zoom.us/j/97999885225' target="_blank" rel="noreferrer" className='committee-item'>
                                    EU
                                </a>
                                <a href='https://zoom.us/j/94467640981' target="_blank" rel="noreferrer" className='committee-item'>
                                    NATO
                                </a>
                                <a href='https://zoom.us/j/95481442958' target="_blank" rel="noreferrer" className='committee-item'>
                                    USS
                                </a>
                                <a href='https://zoom.us/j/94201934372' target="_blank" rel="noreferrer" className='committee-item'>
                                    ASEAN
                                </a>
                                <a href='https://zoom.us/j/93127543451' target="_blank" rel="noreferrer" className='committee-item'>
                                    IAC
                                </a>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Specialized Agencies</h4>
                                <a href='https://zoom.us/j/99289541235' target="_blank" rel="noreferrer" className='committee-item'>
                                    UN Women
                                </a>
                                <a href='https://zoom.us/j/98248975106' target="_blank" rel="noreferrer" className='committee-item'>
                                    UNEP
                                </a>
                                <a href='https://zoom.us/j/98514414192' target="_blank" rel="noreferrer" className='committee-item'>
                                    UNSC
                                </a>
                                <a href='https://zoom.us/j/98200892509' target="_blank" rel="noreferrer" className='committee-item'>
                                    ILO
                                </a>
                                <a href='https://zoom.us/j/99654978179' target="_blank" rel="noreferrer" className='committee-item'>
                                    Facebook (miniEnterprize)
                                </a>
                            </div>
                            <div className='group-inner'>
                                <h4>Crisis Committees</h4>
                                <a href='https://zoom.us/j/99252586573' target="_blank" rel="noreferrer" className='committee-item'>
                                    JCC A
                                </a>
                                <a href='https://zoom.us/j/91589087448' target="_blank" rel="noreferrer" className='committee-item'>
                                    JCC B
                                </a>
                                <a href='https://zoom.us/j/99758129303' target="_blank" rel="noreferrer" className='committee-item'>
                                    FCC
                                </a>
                                <a href='https://zoom.us/j/92543690257' target="_blank" rel="noreferrer" className='committee-item'>
                                    HCC
                                </a>
                                <a href='https://zoom.us/j/96063121501' target="_blank" rel="noreferrer" className='committee-item'>
                                    Korean Cabinet
                                </a>
                                <a href='https://zoom.us/j/98908274926' target="_blank" rel="noreferrer" className='committee-item'>
                                    IPC
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