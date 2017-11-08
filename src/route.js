import React from 'react';
import * as Route from 'react-router-dom';
import * as BrowserRouter from 'react-router-dom';
import * as Switch from "react-router";
import * as App from './components/App';
import * as AboutPage from './components/about/AboutPage';

export class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" render={(props)=>{
                return <App>
                    <HomePage {...props}></HomePage>
                </App>
                }}/>
                <Route exact path="/about" render={(props)=>{
                return <App>
                    <AboutPage {...props}></AboutPage>
                </App>
                }}/>
            </Switch>
            </BrowserRouter>
        )
    }
}

