import React from 'react';

import { streetCoords, grassCoords, committeeCoords } from '../data/SpecialGrids';

const Grid = () => {

    const isSpecial = (x, y, type, committee) => {
        if(type === 'grass') {
            for (let i = 0; i < grassCoords.length; i++) {
                if (grassCoords[i][0] == x && grassCoords[i][1] == y) {
                    return true; 
                }
            }
            return false;
        }
        
        if(type === 'street') {
            for (let i = 0; i < streetCoords.length; i++) {
                if (streetCoords[i][0] == x && streetCoords[i][1] == y) {
                    return true; 
                }
            }
            return false;
        }
        
        if (type === 'committee') {

            for (let i = 0; i < committeeCoords[committee].length; i++) {
                if (committeeCoords[committee][i][0] === x && committeeCoords[committee][i][1] == y) {
                    return true; 
                }
            }

            return false;
        }
    }
        
    const displayGrids = () => {
        let displayArr = [];

        for(let e = 0; e < 40; e++) { // ROWS + 10 (because the view of the grid is less)
            for (let j = 0; j < 40; j++) { // COL + 10 (because the view of the grid is less)
                // doing a double loop so we can dynamically add the committees at certain grids :)
                if (false) {
                    // checking if part of a 'special grid'

                } else if (isSpecial(e, j, 'street')) {
                    displayArr.push(
                        <div className="grid-item street"></div>
                    );
                } else if (isSpecial(e, j, 'committee', 'disec')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                disec
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'interpol')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                interpol
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'sochum')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                sochum
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'who')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                who
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'iac')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                iac
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'nato')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                nato
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'uss')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                uss
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'eu')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                eu
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'asean')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                asean
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'unep')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                unep
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'unsc')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                unsc
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'unwomen')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                unwomen
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'facebook')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                facebook
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'ilo')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                ilo
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'jcc')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                jcc
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'fcc')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                fcc
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'hcc')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                hcc
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'ipcngo')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                ipcngo
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', 'cabinet')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                cabinet
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', '_staff')) {
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                staff
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', '_main')) {
                    //cahsmun main
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                cahs
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', '_sec')) {
                    // secretariat desk
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                sec desk
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'committee', '_social')) {
                    // secretariat desk
                    displayArr.push(
                        <div className="grid-item committee">
                            <a href="#" className='grid-link'>
                                social
                            </a>
                        </div>
                    );
                } else if (isSpecial(e, j, 'grass')) {
                    displayArr.push(
                        <div className="grid-item grass"></div>
                    );
                } else {
                    displayArr.push(
                        <div className="grid-item"></div>
                    );
                }
            }
        }

        return displayArr;
    }

    return displayGrids();
}

export default Grid;