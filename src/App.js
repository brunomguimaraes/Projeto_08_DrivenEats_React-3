import TopBar from "./TopBar.js";
import Menu from "./Menu.js";
import BottomBar from "./BottomBar.js";
import ConfirmationScreen from "./ConfirmationScreen.js";
import serverData from "./ServerData/AllServerData.js";
import React,{useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./CSS/reset.css";
import "./CSS/generalStyles.css";



export default function App() {

    const [quantities,setQuantities] = useState(serverData.map(({array}) => array.map(() => 0)));
    
    const adjustQuantitiesArray = ( {menuIndex, itemIndex,adjustingValue} ) => {
        const newQuantities = [...quantities];
        newQuantities[menuIndex][itemIndex] += adjustingValue;
        setQuantities(newQuantities);
    }

    return (
        <Router>
            <Switch>
                <Route path="/revisar">
                    <TopBar />
                    <ConfirmationScreen
                        serverData = {serverData}
                        quantities = {quantities}
                    />
                </Route>
                <Route path="/">
                    <TopBar />
                    <div className="container">
                        {serverData.map(({titleText,array},index) => 
                            <Menu 
                                key = {index}
                                menuIndex = {index} 
                                title = {titleText}
                                items = {array}
                                quantities = {quantities}
                                adjustQuantitiesArray = {adjustQuantitiesArray}
                            />)}
                    </div>
                    <BottomBar quantities = {quantities} />
                </Route>
            </Switch>
        </Router>
    );
}