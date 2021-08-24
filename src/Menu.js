import Item from "./Item";

export default function Menu(props) {
    return (
        <div className="menu main-dish">
            <p className = "menu-title">
                {props.title}
            </p>
            <ul>
                {props.items.map((itemObject,index) => <Item key = {index} data = {itemObject}/>)}
            </ul>
        </div>
    );
}