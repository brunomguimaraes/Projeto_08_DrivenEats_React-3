import { Link } from "react-router-dom";
import "./CSS/bottomBar.css";

export default function BottomBar({quantities}) {
    const isOrderValid = quantities.every((menuQuantities) => menuQuantities.some((itemQuantity) => itemQuantity !== 0));
    let buttonClass;
    let buttonText;
    if (isOrderValid) {
        buttonClass = "activated";
        buttonText = "Fechar pedido";
    } else {
        buttonClass = "";
        buttonText = "Selecione os 3 itens para fechar o pedido";
    }

    return (
        <div className="bottom-bar">
            <Link className = { `link ${ buttonClass }` } to = "/revisar" onClick = { e => { if(!isOrderValid) { e.preventDefault() } } }>
                <span>{ buttonText }</span>
            </Link>
        </div>
    );
}