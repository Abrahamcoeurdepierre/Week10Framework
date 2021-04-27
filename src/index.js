import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React,{useState} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import Header from './Header';
import './styles.css';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);


function App(){
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
      <AuthContext.Provider value = {{ isLoggedIn, setLoggedIn }}>
          Is logged in? {JSON.stringify(isLoggedIn)}
          <div className="App">
              <Router>
                  <Header/>

                  <Switch>
                      {routes.map(route => (
                          <Route
                              key={route.path}
                              path={route.path}
                              exact={route.exact}
                              component={route.main}
                          />
                      ))}
                  </Switch>
              </Router>
          </div>
          </AuthContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();