import React,{useState} from "react";

export default function Item(props) {
    const {image,alt,name,description,price} = props.data;
    const [quantity,setQuantity] = useState(0);
    const [isSelected,setIsSelected] = useState("");

    function decrementQuantity() {
        if (quantity === 1) {
            setIsSelected("");
        }
        setQuantity(quantity - 1);
    }
    
    function selectItem() {
        setIsSelected("activated-item");
        setQuantity(1);
    }

    return (
        <li className={isSelected} onClick={selectItem}>
            <div>
                <img src={image} alt={alt} />
                <p className="item-title">
                    {name}
                </p>
            </div>
            <p className="item-subtitle">
                {description}
            </p>
            <p className="item-price">
                {price}
            </p>
            <div className={`select-quantity ${isSelected}`} onClick = {(e) => e.stopPropagation()} >
                <button className="red" onClick={decrementQuantity}>
                    -
                </button>
                    {quantity}
                <button className="green" onClick={() => setQuantity(quantity + 1)}>
                    +
                </button>
            </div>
        </li>
    );
}