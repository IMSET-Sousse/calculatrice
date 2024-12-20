import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={4}>Calculator Keypad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input type="text" value="Invalid Input !!!" readOnly />
            </td>
          </tr>
          <tr><td>1</td><td>2</td><td>3</td><td>+</td></tr>
          <tr><td>4</td><td>5</td><td>6</td><td>-</td></tr>
          <tr><td>7</td><td>8</td><td>9</td><td>*</td></tr>
          <tr><td>.</td><td>0</td><td>=</td><td>/</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
