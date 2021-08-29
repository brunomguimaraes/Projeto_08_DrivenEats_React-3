import {Link} from "react-router-dom";

export default function BottomBar({isOrderValid,buttonFunction}) {
    let buttonClass;
    let buttonText;
    if (isOrderValid) {
        buttonClass ="activated";
        buttonText = "Fechar pedido";
    } else {
        buttonClass ="";
        buttonText = "Selecione os 3 itens para fechar o pedido";
    }

    return (
        <div className="bottom-bar">
            <Link className={`link ${buttonClass}`} to="/revisar" onClick={e => {if(!isOrderValid) {e.preventDefault()}}}>
                <span>{buttonText}</span>
            </Link>
        </div>
    );
}