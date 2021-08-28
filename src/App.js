import TopBar from "./TopBar.js";
import Menu from "./Menu.js";
import BottomBar from "./BottomBar.js";
import ConfirmationScreen from "./ConfirmationScreen.js";
import serverData from "./ServerData/AllServerData.js";
import React,{useState} from "react";

export default function App() {
    const initialQuantities = serverData.map(({array}) => array.map(() => 0));
    const [quantities,setQuantities] = useState(initialQuantities);

    function adjustItemQuantity ({menuIndex, itemIndex,adjustingValue}) {
        const newQuantities = [...quantities];
        newQuantities[menuIndex][itemIndex] += adjustingValue;
        return newQuantities;
    }

    function adjustQuantitiesArray({menuIndex, itemIndex,adjustingValue}) {
        setQuantities(adjustItemQuantity ({menuIndex, itemIndex,adjustingValue}));
    }
    
    return (
        <>
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
            <BottomBar isButtonActivated={""}/>
            <ConfirmationScreen isHidden={'hidden'}/>
        </>
    );
}