import React, { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { useHistory } from 'react-router-dom';

import logo from './assets/cahs-logo.png';

const Login = (props) => {

    const history = useHistory();

    const { currentUser, loginUsingGoogle } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    // Temporary (will import emails/passwords from DB to use as login)
    async function handleGoogleLogin(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);

            const returnData = await loginUsingGoogle();
            if (returnData) {

            } else {
                setError('Failed to log in');
            }
        } catch {
            setError('Failed to log in');
        }

        setLoading(false);
        history.push('/');
    }
    
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-pane'>
                    <img draggable='false' className='colonize' src={logo} />
                </div>
                <div className='login'>
                    <h2>Cahsmun Campus</h2>
                    <h3>cahsmun | the seventeenth session</h3>
                    <button disabled={loading} className={`google disable${loading}`} onClick={handleGoogleLogin}>
                        {(loading) ? (
                            `Working hard...`
                        ) : (
                            `Login Using Google`
                        )}
                    </button>
                    {(error) ? (
                        <div className='login-error'>
                            {error}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;