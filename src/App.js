import './App.css';
import React from 'react';
import {Map} from "./component/Map";
import {Addresses} from "./component/Addresses";



function App() {
  return <div>
    <Map/>
  </div>;
}


export default React.memo(App)
