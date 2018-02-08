import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './LoginComponent/Login';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';

const theme = createMuiTheme({
   palette: {
      primary: { main: teal[500] }, // Purple and green play nicely together.
      secondary: { main: '#607D8B' }, // This is just green.A700 as hex.
    }
});


export default class App extends React.Component {

    render() {
        return( 
            <MuiThemeProvider theme = {theme}>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </MuiThemeProvider>
        );
    }
}