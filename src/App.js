import { useState } from "react";

export default function App() {
  return (
    <div className="message">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <>
      <div>
        <div>
          <button className="button" onClick={decreaseCount}>
            -
          </button>
          <span>Count: {count}</span>

          <button className="button" onClick={increaseCount}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
