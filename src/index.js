import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import UserRegForm from "./components/UserRegForm/UserRegForm";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
   palette: {
      primary: {
         main: "#f25436" 
      },
     }
  
});
var hist = createBrowserHistory();
ReactDOM.render(
   <ThemeProvider theme={theme}>
      <Router history={hist}>
         <Switch>
            <Route path="/Welcome" component={WelcomePage} />
            <Route path="/" component={UserRegForm} />
         </Switch>
      </Router>
   </ThemeProvider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
