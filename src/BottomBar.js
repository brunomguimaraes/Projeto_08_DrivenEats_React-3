export default function BottomBar({isButtonActivated}) {
    return (
        <div className="bottom-bar">
            <button className={isButtonActivated}>
                Selecione os 3 itens para fechar o pedido
            </button>
        </div>
    );
}