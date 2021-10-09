import "./App.css";
import React from "react";
import Recond from "recond";

function App() {
  const [currentCount, setCount] = React.useState(0);

  //Object keys should be match between two props.
  const METHODS = {
    zero: () => "my lucky number is zero",
    one: () => "my lucky number isn't one",
    two: () => "two is even",
    three: () => "three is odd",
    four: () => "four is divisible by two",
    five: () => "five is prime number",
  };
  const CONDITIONS = {
    zero: currentCount === 0,
    one: currentCount === 1,
    two: currentCount === 2,
    three: currentCount === 3,
    four: currentCount === 4,
    five: currentCount === 5,
  };

  const handleChange = ({ target }) => {
    const newNumber = parseInt(target.value, 10);
    if (newNumber > 6) {
      target.value = currentCount;
    } else {
      setCount(newNumber);
    }
  };
  return (
    <div className="app">
      <div className="card">
        <div className="card-header">
          <h1>Here is your example!</h1>
        </div>
        <div className="card-body">
          <input type="number" step="1" min="0" max="6" defaultValue={currentCount} onChange={handleChange} />
        </div>
        <span>
          <Recond
            methods={METHODS}
            conditions={CONDITIONS}
            defaultValue="Whooops, this is should be default value. So there is no passed condition."
          />
        </span>

        <div className="card-footer">
          <p>
            You can find this example's source code on{` `}
            <a href="https://github.com/iscanyc/recond" className="link">
              Github Repository
            </a>
            . Also you can look at{" "}
            <a href="https://www.npmjs.com/package/recond" className="link">
              NPM Page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
