export default function BottomBar({buttonData:{buttonClass, buttonText, buttonFunction}}) {
    return (
        <div className="bottom-bar">
            <button className={buttonClass} onClick = {buttonFunction}>
                {buttonText}
            </button>
        </div>
    );
}