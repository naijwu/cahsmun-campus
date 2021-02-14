import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';

import Main from './Main';
import Login from './Login';
import Conference from './Conference';
import Resources from './Resources';

function AuthRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? ( 
          <Component {...props} />
        ) : ( 
          <Redirect to='/login' />
        )
      }
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/login' component={Login} /> /* No Login */}

        <Route exact path='/conference/:information' component={Conference} />
        <Route exact path='/resources/:resource' component={Resources} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
