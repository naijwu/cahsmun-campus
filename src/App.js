import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/AuthContext';

import Main from './Main';
import Guide from './Guide';
import Conference from './Conference';

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
        <Route exact path='/' component={Conference} />
        {/* <Route exact path='/login' component={Login} /> /* No Login */}

        <Route exact path='/rooms' component={Main} />
        <Route exact path='/guide' component={Guide} />
        <Route exact path='/conference/:information' component={Conference} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
