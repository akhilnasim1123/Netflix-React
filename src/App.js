import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import {originals,action, Drama, Horror, Comedy,Crime, History, Adventure, Family, Animation} from './urls'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Actiion' isSmall/>
    <RowPost url={Drama} title='Drama' isSmall/>
    <RowPost url={Horror} title='Horror' isSmall/>
    <RowPost url={Comedy} title='Comedy' isSmall/>
    <RowPost url={Crime} title='Crime' isSmall/>
    <RowPost url={History} title='History' isSmall/>
    <RowPost url={Adventure} title='Adventure' isSmall/>
    <RowPost url={Family} title='Family' isSmall/>
    <RowPost url={Animation} title='Animation' isSmall/>



    </div>
  );
}

export default App;
