import React, { useState, useEffect, useRef } from 'react';

// yeah i honestly feel kinda shitty that I couldn't figure out dragging scroll which should be ez but like whatever man indiana scroll or whatever works
import ScrollContainer from 'react-indiana-drag-scroll'

import Panel from './Panel';

const Main = () => {

    const [isBoomer, setIsBoomer] = useState(false);


    const isGrass = (x, y) => {
        let grassCoords = [
            [10, 15],
            [11, 15],
            [12, 15],
            [11, 16],
            [10, 17],
            [11, 17],
            [12, 17],
            [10, 19],
            [11, 19],
            [12, 19],
        ];

        for (let i = 0; i < grassCoords.length; i++) {
            if (grassCoords[i][0] == x && grassCoords[i][1] == y) {
                return true; 
            }
        }
        return false;
    }
        
    const displayGrids = () => {
        let displayArr = [];

        for(let e = 0; e < 40; e++) { // ROWS + 10 (because the view of the grid is less)
            for (let j = 0; j < 40; j++) { // COL + 10 (because the view of the grid is less)
                // doing a double loop so we can dynamically add the committees at certain grids :)
                if (false) {
                    // checking if part of a 'special grid'

                } else if (isGrass(e, j)) {
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


    const switchView = () => {
        setIsBoomer((isBoomer) ? false : true);
    }

    return (!isBoomer) ? (
        <ScrollContainer className='main'>
            <Panel />
            <div className='campus'>
                <div className='floor'>
                    <div className='grid'>
                        {
                            displayGrids()
                        }
                    </div>
                </div>
            </div>
            <div className='toggle' onClick={switchView}>
                <div className='switch cool'>
                    View Committee List
                </div>
            </div>
        </ScrollContainer>
    ) : (
        <div className='main'>
            <Panel />
            <div className='committees-container'>
                <div className='committees'>
                    <h2>Committees</h2>
                    <h3>Conference</h3>
                </div>
            </div>
            <div className='toggle' onClick={switchView}>
                <div className='switch boomer'>
                    View Committee Map
                </div>
            </div>
        </div>
    );
}

export default Main;