import React from "react";
import './assets/style/index.scss'
import RouterComponent from "./router";
import Header from "./Pages/Header";
import useLoader from "./hook/useLoader";
import Preloader from "./utile/preloader";
import {useLocation} from "react-router-dom";

function App() {
    const location = useLocation()
    const {loading} = useLoader()
    if (loading) {
        return <Preloader/>
    }


    return (
        <div className="App">
            <Header/>
            <RouterComponent/>
        </div>
    );
}

export default App;
