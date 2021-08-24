export default function Item(props) {
    return (
        <li onclick="ActivateMainDish(this);">
        <div>
            <img src={props.data.image} alt={props.data.alt} />
            <p className="item-title">
                {props.data.name}
            </p>
        </div>
        <p className="item-subtitle">
            {props.data.description}
        </p>
        <p className="item-price">{props.data.price}</p>
        <ion-icon name="checkmark-circle" />
    </li>
    );
}