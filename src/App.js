import React from "react";
import './assets/style/index.scss'
import RouterComponent from "./router";
import Header from "./Pages/Header";
import useLoader from "./hook/useLoader";
import Preloader from "./utile/preloader";

function App() {
    const {loading} = useLoader()
    if(loading) {
        return <Preloader />
    }
    return  (
        <div className="App">
            <Header/>
            <RouterComponent/>
        </div>
    );
}

export default App;
