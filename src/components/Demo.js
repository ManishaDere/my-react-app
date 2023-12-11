import React, { useState, useMemo } from "react";

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}

// useMemo - useMemo is hook which cache the result of calculations  between re-renders
const Demo = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(false);

  console.log("Rendering...");
  const prime = useMemo(() => findNthPrime(num), [num]);
  // const prime = findNthPrime(num);
  return (
    <div className={theme ? "bg-black text-white" : "bg-white text-black"}>
      <label htmlFor="theme">Change theme</label>
      <input
        type="checkbox"
        value={theme}
        id="theme"
        onChange={() => {
          setTheme(!theme);
        }}
        className="mb-4"
      />
      <input
        type="number"
        value={num}
        className="border border-solid border-black p-4 text-black"
        onChange={(e) => setNum(e.target.value)}
      />
      <h1>{prime}</h1>
    </div>
  );
};

export default Demo;
