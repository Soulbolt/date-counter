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
  const [step, setStep] = useState(1);

  const date = new Date("January 31, 2024");
  date.setDate(date.getDate() + count);

  function increaseCount() {
    setCount(count + step);
  }

  function decreaseCount() {
    setCount(count - step);
  }
  return (
    <>
      <div>
        <div>
          <button className="button" onClick={() => setStep((s) => s - 1)}>
            -
          </button>
          <span>Step: {step}</span>

          <button className="button" onClick={() => setStep((s) => s + 1)}>
            +
          </button>
        </div>
      </div>
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
