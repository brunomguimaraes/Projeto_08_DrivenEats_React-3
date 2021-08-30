import { Link } from "react-router-dom";
import "./CSS/confirmationScreen.css";

export default function ConfirmationScreen({ serverData, quantities }) {

    const pickValidItems = (items, itemsQuantities) => {
        const addedQuantity = items.map( ({ name, price }, itemIndex) => ({ name, price, quantity: itemsQuantities[itemIndex] }) );
        const pickValids = addedQuantity.filter(({ quantity }) => quantity !== 0 );
        return pickValids;
    }

    const validItems = serverData.map( ({ array, type }, menuIndex) => ({ type, items: pickValidItems(array, quantities[menuIndex]) }) );
    let totalPrice = 0;
    validItems.forEach( ({ items }) => items.forEach( ({ price, quantity }) => (totalPrice += price * quantity)) );

    function prepareAndSendMessage(validItems, totalPrice) {
        let message = "Olá, gostaria de fazer o pedido:\n\n";
        validItems.forEach( ({ type, items }) => {
            message += `- ${ type }\n`;
            items.forEach( ({ name, quantity }) => {
                message += `${ name }`;
                if (quantity !== 1) {
                    message += ` (${ quantity }x)`;
                }
                message += `\n`;
            })
        })
        message += `\nTotal: R$ ${ totalPrice.toFixed(2) }`;
        const webLink = "https://wa.me/5521988405128?text=" + encodeURIComponent(message);
        window.open(webLink, '_blank');
    }

    return(
        <section className = "confirmation-screen">
            <span> Revise seu pedido</span>
            <ul>
                <PrintOrder validItems = { validItems } totalPrice = { totalPrice }/>
            </ul>
            <button className = "link finish-order" onClick = { () => prepareAndSendMessage(validItems, totalPrice) }>
                <span>Tudo certo, pode pedir!</span>
            </button>
            <Link className = "link cancel-order" to = "/">
                <span>Cancelar</span>
            </Link>
        </section>
    );
}

function PrintOrder({ validItems, totalPrice }) {
    function stringPrice(currency, price) {
        return currency + price.toFixed(2).replace(".", ",");
    }
    return (
        <>
            { validItems.map( ({ items }) => 
                items.map( ({ name, price, quantity }, index) => 
                    <SingleItem key = { index } name = { name } quantity = { quantity } price = { stringPrice("", price * quantity) } />
                )
            )}
            <li>
                <span>Total</span>
                <span>{ stringPrice("R$ ", totalPrice) }</span>
            </li>
        </>
    );
}

function SingleItem({ name, quantity, price }) {
    return (
        <li>
            <span>{ name } ({ quantity }x)</span>
            <span>{ price }</span>
        </li>
    );
}