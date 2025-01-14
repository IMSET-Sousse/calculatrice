import '../styles/Buttons.css';

function OperatorButton(props) {
    return (
        <button className="button operator-button">{props.operator}</button>
    )
}

export default OperatorButton;