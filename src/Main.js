import React, { useState, useEffect, useRef } from 'react';

// yeah i honestly feel kinda shitty that I couldn't figure out dragging scroll which should be ez but like whatever man indiana scroll or whatever works
import ScrollContainer from 'react-indiana-drag-scroll'
import Grid from './components/Grid';

import Panel from './Panel';

const Main = () => {

    return (
        <div className='main'>
            <Panel />
            <div className='committees-container'>
                <div className='committees'>
                    <h2>Committee Rooms</h2>
                    <h3>Conference</h3>
                    <div className='columns'>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>General Assemblies</h4>
                                <a href='#' className='committee-item'>
                                    DISEC
                                </a>
                                <a href='#' className='committee-item'>
                                    SOCHUM
                                </a>
                                <a href='#' className='committee-item'>
                                    INTERPOL
                                </a>
                                <a href='#' className='committee-item'>
                                    WHO
                                </a>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Regional Bodies</h4>
                                <a href='#' className='committee-item'>
                                    EU
                                </a>
                                <a href='#' className='committee-item'>
                                    NATO
                                </a>
                                <a href='#' className='committee-item'>
                                    USS
                                </a>
                                <a href='#' className='committee-item'>
                                    ASEAN
                                </a>
                                <a href='#' className='committee-item'>
                                    IAC
                                </a>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Specialized Agencies</h4>
                                <a href='#' className='committee-item'>
                                    UN Women
                                </a>
                                <a href='#' className='committee-item'>
                                    UNEP
                                </a>
                                <a href='#' className='committee-item'>
                                    UNSC
                                </a>
                                <a href='#' className='committee-item'>
                                    ILO
                                </a>
                                <a href='#' className='committee-item'>
                                    Facebook (miniEnterprize)
                                </a>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='group-inner'>
                                <h4>Crisis Committees</h4>
                                <a href='#' className='committee-item'>
                                    JCC
                                </a>
                                <a href='#' className='committee-item'>
                                    FCC
                                </a>
                                <a href='#' className='committee-item'>
                                    HCC
                                </a>
                                <a href='#' className='committee-item'>
                                    Korean Cabinet
                                </a>
                                <a href='#' className='committee-item'>
                                    IPC/NGO
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