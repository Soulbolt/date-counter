import { useState } from "react";

export default function App() {
  return (
    <div className="message">
      <Counter />
    </div>
  );
}
/**
 * Function: Label Counter, count and step useState variables, date for current date.
 * This includes 2 functions that increase, decrease buttons to display day value.
 * A Step function is used to increase the frequency the day change should be displayed.
 * Example: step = 2 + counter value increase days by 2. etc.
 * Includes conditionals to display proper text to represent the date being displayed.
 * Example: Today is {date.toString()} or days from today is or days ago was, respectively.
 * @returns Step, count, date to render and interact with, to display date value dynamicly.
 */
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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          {/* <button className="button" onClick={() => setStep((s) => s - 1)}>
            -
          </button> */}
          <span>{step}</span>

          {/* <button className="button" onClick={() => setStep((s) => s + 1)}>
            +
          </button> */}
        </div>
      </div>
      <div>
        <div>
          {/* <input type="number" className="button" onClick={decreaseCount} /> */}
          <button className="button" onClick={decreaseCount}>
            -
          </button>
          <input
            type="text"
            className="button"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
