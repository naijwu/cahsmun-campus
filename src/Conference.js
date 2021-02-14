import React, {useState, useEffect} from 'react';
import Panel from './Panel';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from 'react-router-dom';

const Conference = () => {

    const params = useParams();

    const [page, setPage] = useState('');

    useEffect(() => {
        if(params) {
            setPage(params.information);
        }
    }, [params]);

    return (
        <div className='conference'>
            <Panel />
            <div className='conference-container'>
                {(page === 'information') ? (
                    <div className='information'>
                        <h2>General Information</h2>
                        <h3>Conference</h3>
                    </div>
                ) : (
                    <div className='schedule'>
                        <h2>Conference Schedule</h2>
                        <h3>Conference</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Conference;