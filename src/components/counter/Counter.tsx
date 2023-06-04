import { useState } from "react";
import "tailwindcss/tailwind.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="px-24">
        <h1 className="text-5xl font-extrabold dark:text-white mb-5"> Contador: {counter}</h1>
        <button
          type="button"
          className="rounded-full ... focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => {
            increment();
          }}
        >
          +1
        </button>
        <button
          type="button"
          className="rounded-full ...focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => {
            decrement();
          }}
        >
          -1
        </button>
      </div>
    </>
  );
};
