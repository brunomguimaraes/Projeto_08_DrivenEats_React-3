import React,{ useState } from "react";

export default function Item({ menuIndex, itemIndex, data: {image, alt, name, description, price}, quantities, adjustQuantitiesArray}) {
    const itemQuantity = quantities[menuIndex][itemIndex];
    let initialClass = (itemQuantity !== 0 ? "activated-item" : "");
    const [isSelected, setIsSelected] = useState(initialClass);

    function decrementQuantity() {
        if (itemQuantity === 1) {
            setIsSelected("");
        }
        adjustQuantitiesArray ({ menuIndex, itemIndex, adjustingValue: -1 });
    }

    function incrementQuantity() {
        adjustQuantitiesArray ({ menuIndex, itemIndex, adjustingValue: +1 });
    }

    function selectItem() {
        if (isSelected !== "activated-item") {
            setIsSelected("activated-item");
            incrementQuantity();
        }
    }

    return (
        <li className = { isSelected } onClick = { selectItem }>
            <div>
                <img src = { image } alt={ alt } />
                <p className = "item-title">
                    { name }
                </p>
            </div>
            <p className = "item-subtitle">
                { description }
            </p>
            <p className = "item-price">
                {`R$ ${ price.toFixed(2).replace(".",",") }` }
            </p>
            <div className = { `select-quantity ${ isSelected }` } onClick = { (e) => e.stopPropagation() } >
                <button className = "red" onClick = { decrementQuantity }>
                    -
                </button>
                    { itemQuantity }
                <button className = "green" onClick = { incrementQuantity }>
                    +
                </button>
            </div>
        </li>
    );
}