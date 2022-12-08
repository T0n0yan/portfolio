import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from "../Pages/home";


const RouterComponent = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Home/>}/>
            <Route exact path={'/home'} render={() => <Home/>}/>
        </div>);
};

export default RouterComponent;
