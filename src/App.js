import React from "react";
import './assets/style/index.scss'
import RouterComponent from "./router";
import Header from "./Pages/Header";
function App() {
  return (
    <div className="App">
        <Header />
        <RouterComponent  />
    </div>
  );
}

export default App;
