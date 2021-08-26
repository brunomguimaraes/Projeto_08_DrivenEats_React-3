import TopBar from "./TopBar.js";
import Menu from "./Menu.js";
import BottomBar from "./BottomBar.js";
import ConfirmationScreen from "./ConfirmationScreen.js";
import serverData from "./ServerData/AllServerData.js";

export default function App() {
    return (
        <>
            <TopBar />
            <div className="container">
                {serverData.map(({titleText,array},index) => <Menu key = {index} title = {titleText} items = {array}/>)}
            </div>
            <BottomBar />
            <ConfirmationScreen />
        </>
    );
}