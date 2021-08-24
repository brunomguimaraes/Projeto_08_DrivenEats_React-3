import TopBar from "./TopBar.js";
import Menu from "./Menu.js";
import BottomBar from "./BottomBar.js";

export default function App() {
    return (
        <>
            <TopBar />
            <div className="container">
                <Menu />
                <Menu />
                <Menu />
            </div>
            <BottomBar />
        </>
    );
}