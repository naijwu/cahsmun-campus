import React, {useState, useEffect} from 'react';
import Panel from './Panel';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from 'react-router-dom';

const Resources = () => {

    const params = useParams();

    const [page, setPage] = useState('');

    useEffect(() => {
        if(params) {
            setPage(params.resource);
        }
    }, [params]);

    return (
        <div className='resources'>
            <Panel />
            <div className='resources-container'>
                {(page === 'resolution-paper') ? (

                    <div className='rp'>
                        <h2>Resolution Paper Guide</h2>
                        <h3>Delegate Resources</h3>
                    </div>

                ) : ((page === 'rules-of-procedure') ? (

                    <div className='rop'>
                        <h2>Rules of Procedure</h2>
                        <h3>Delegate Resources</h3>
                    </div>

                    ) : (
                        (page === 'crisis-procedure') ? (

                    <div className='cp'>
                        <h2>Crisis Procedure</h2>
                        <h3>Delegate Resources</h3>
                    </div>

                        ) : ('')
                    )
                )}
            </div>
        </div>
    );
}

export default Resources;