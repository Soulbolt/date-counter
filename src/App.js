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
  const date = new Date("January 31, 2024");
  date.setDate(date.getDate() + count);

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
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
