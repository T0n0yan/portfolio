import React from 'react';
import {Route} from "react-router-dom";
import Home from "../Pages/home";
import About from "../Pages/about";
import Skill from "../Pages/skills";
import Contacts from "../Pages/contacts";
import Projects from "../Pages/projects";
import useNavigationLoader from "../hook/useNavigationLoader/useNavigationLoader";
import NavigationPreloader from "../utile/navigationPreloader";


const RouterComponent = () => {
    const {isLoading} = useNavigationLoader()
    if (isLoading) {
        return <NavigationPreloader />
    }
    return (
        <div>
            <Route exact path={'/'} render={() => <Home/>}/>
            <Route exact path={'/home'} render={() => <Home/>}/>
            <Route exact path={'/about'} render={() => <About/>}/>
            <Route exact path={'/skills'} render={() => <Skill/>}/>
            <Route exact path={'/projects'} render={() => <Projects/>}/>
            <Route exact path={'/contacts'} render={() => <Contacts/>}/>
        </div>);
};

export default RouterComponent;
