import Item from "./Item";

export default function Menu({menuIndex, title, items, quantities, adjustQuantitiesArray}) {

    return (
        <div className="menu main-dish">
            <p className = "menu-title">
                {title}
            </p>
            <ul>
                {items.map((itemObject,index) => 
                <Item 
                key = {index}
                menuIndex = {menuIndex}
                itemIndex = {index}
                data = {itemObject}
                quantities = {quantities}
                adjustQuantitiesArray = {adjustQuantitiesArray}
                />)}
            </ul>
        </div>
    );
}