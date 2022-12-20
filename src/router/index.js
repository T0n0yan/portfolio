import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from "../Pages/home";
import AboutMe from "../Pages/about-me";
import Skill from "../Pages/skills";
import Contacts from "../Pages/contacts";


const RouterComponent = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Home/>}/>
            <Route exact path={'/home'} render={() => <Home/>}/>
            <Route exact path={'/about'} render={() => <AboutMe/>}/>
            <Route exact path={'/skills'} render={() => <Skill/>}/>
            <Route exact path={'/contacts'} render={() => <Contacts/>}/>

        </div>);
};

export default RouterComponent;
