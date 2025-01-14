import '../styles/Buttons.css';

function NumberButton(props) {
    return (
        <button className="button">{props.number}</button>
    )
}


export default NumberButton;