export default function ConfirmationScreen() {
    return(
        <section className="confirmation-screen hidden">
            <span> Revise seu pedido</span>
            <ul>
                <li>
                    <span>Frango Yin Yang</span>
                    <span>R$ 27,70</span>
                </li>
                <li>
                    <span>Frango Yin Yang</span>
                    <span>R$ 27,70</span>
                </li>
                <li>
                    <span>Frango Yin Yang</span>
                    <span>R$ 27,70</span>
                </li>
                <li>
                    <span>Total</span>
                    <span>R$ 80,70</span>
                </li>
            </ul>
            <button className = "finish-order">
                Tudo certo, pode pedir!
            </button>
            <button className = "cancel-order">
                Cancelar
            </button>
        </section>
    );
}