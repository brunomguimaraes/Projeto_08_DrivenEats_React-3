export default function Item() {
    return (
        <li onclick="ActivateMainDish(this);">
        <div>
            <img src="Images/Panqueca com Caviar.jpg"
            alt="Prato de panquecas ao molho branco coberto com caviar" />
            <p className="item-title">
                Panqueca ao Caviar
            </p>
        </div>
        <p className="item-subtitle">
            Nunca viu? Nem comeu? Só ouviu falar? Aqui tem!
        </p>
        <p className="item-price">R$ 42,20</p>
        <ion-icon name="checkmark-circle" />
    </li>
    );
}