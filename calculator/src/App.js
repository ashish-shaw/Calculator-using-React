import "./styles.css";
import add from "./components/add";
import sub from "./components/sub";
import mult from "./components/multiply";
import divide from "./components/divide";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <h3>Addition of two numbers is {add(4, 3)}</h3>
      <h3>Subtraction of two numbers is {sub(4, 3)}</h3>
      <h3>Multiplication of two numbers is {mult(4, 3)}</h3>
      <h3>Division of two numbers is {divide(4, 3)}</h3>
    </div>
  );
}
