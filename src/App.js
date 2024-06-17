import "./App.css";
import { useState } from "react";
import { Increment, Decrement } from "./components/Counterfns";
function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };
    return (
        <main>
            <h1>Counter App</h1>
            <div className="counter-body">
                <h2>{count}</h2>
                <Increment onIncrement={incrementCount} />
                <Decrement onDecrement={decrementCount} />
            </div>
        </main>
    );
}

export default App;
