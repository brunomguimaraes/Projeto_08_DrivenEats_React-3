import TopBar from "./TopBar.js";
import Menu from "./Menu.js";
import BottomBar from "./BottomBar.js";
import ConfirmationScreen from "./ConfirmationScreen.js";
import serverData from "./ServerData/AllServerData.js";
import React,{useState} from "react";

export default function App() {
    const [quantities,setQuantities] = useState(serverData.map(({array}) => array.map(() => 0)));
    const isOrderValid = quantities.every((menuQuantities) => menuQuantities.some((itemQuantity) => itemQuantity !== 0));
    const [confirmationClass,setConfirmationClass] = useState("hidden")

    const adjustQuantitiesArray = ( {menuIndex, itemIndex,adjustingValue} ) => {
        const newQuantities = [...quantities];
        newQuantities[menuIndex][itemIndex] += adjustingValue;
        setQuantities(newQuantities);
    }

    const adjustButtonClass = () => {
        if (isOrderValid) {
            return {buttonClass:"activated-button", buttonText: "Fechar pedido"}
        }
        return {buttonClass:"", buttonText: "Selecione os 3 itens para fechar o pedido"}
    }

    const showConfirmationScreen = () => {
        if (isOrderValid) {
            setConfirmationClass("");
        }
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
            <BottomBar buttonData={{...adjustButtonClass(), buttonFunction: showConfirmationScreen}}/>
            <ConfirmationScreen
            confirmationClass={confirmationClass}
            setConfirmationClass = {setConfirmationClass}/>
        </>
    );
}