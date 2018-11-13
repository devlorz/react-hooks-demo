import React, { useState, useEffect } from "react";

function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  useEffect(
    () => {
      window.localStorage.setItem("count", count);
    },
    [count]
  );
  return { count, increment };
}

export default function Counter() {
  const initialState = () => Number(window.localStorage.getItem("count") || 0);
  const { count, increment } = useCounter({ initialState, step: 1 });
  return <button onClick={increment}>{count}</button>;
}
