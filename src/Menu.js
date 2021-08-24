import Item from "./Item";

export default function Menu() {
    return (
        <div className="menu main-dish">
            <p className = "menu-title">
                Primeiro, seu prato
            </p>
            <ul>
                <Item />
                <Item />
                <Item />
                <Item />
            </ul>
        </div>
    );
}