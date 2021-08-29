import {Link} from "react-router-dom";

export default function ConfirmationScreen({serverData, quantities}) {

    const everyQuantityArray = quantities.flat();
    const everyItemArray = serverData.map(({array}) => array).flat();
    
    const orderDataArray = everyItemArray.map( ({name,price},index) => ({name, price, quantity:everyQuantityArray[index]}) );
    const validItems = orderDataArray.filter(({quantity}) => quantity !== 0 );

    let totalPrice = 0;
    validItems.forEach(({price,quantity}) => (totalPrice += price*quantity));
    
    return(
        <section className="confirmation-screen">
            <span> Revise seu pedido</span>
            <ul>
                <PrintOrder validItems = {validItems} totalPrice = {totalPrice}/>
            </ul>
            <Link className = "link finish-order" to="/">
                <span>Tudo certo, pode pedir!</span>
            </Link>
            <Link className = "link cancel-order" to="/">
                <span>Cancelar</span>
            </Link>
        </section>
    );
}

function PrintOrder({validItems,totalPrice}) {
    function stringPrice(currency,price) {
        return currency + price.toFixed(2).replace(".",",");
    }

    return (
        <>
            {validItems.map(({name,price,quantity},index) => 
                <SingleItem key = {index} name = {name} quantity = {quantity} price = {stringPrice("",price*quantity)} />)}
            <li>
                <span>Total</span>
                <span>{stringPrice("R$ ",totalPrice)}</span>
            </li>
        </>
    );
}

function SingleItem({name, quantity, price}) {
    return (
        <li>
            <span>{name} ({quantity}x)</span>
            <span>{price}</span>
        </li>
    );
}