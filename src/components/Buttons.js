import '../styles/Buttons.css';

function OperatorButton(props) {
    return (
      <button className="button operator-button">{props.operator}</button>
    )
  }
  
  
function NumberButton(props) {
    return (
        <button className="button">{props.number}</button>
    )
}
  
function EqualButton() {
    return (
        <button className="button equal-button">=</button>
    )
}


export { OperatorButton, NumberButton, EqualButton };
// import { OperatorButton, NumberButton, EqualButton } from './components/Buttons';