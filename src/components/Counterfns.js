import React from "react";
function Increment({ onIncrement }) {
    console.log("Increment function called");
    return <button onClick={onIncrement}>Increment</button>;
}

function Decrement({ onDecrement }) {
    console.log("Decrement function called");
    return <button onClick={onDecrement}>Decrement</button>;
}

export { Increment, Decrement };
