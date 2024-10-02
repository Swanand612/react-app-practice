import { useState } from "react";

export default function Updater() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber((n) => n + 1); // this is an updater function. used when we need to update the state value multiple times before render
          setNumber((n) => n + 1);
          setNumber((n) => n + 1); // this adds to the value in the queue
          setNumber(number + 1); // this will replace the value in the queue. whereas an updater function will add to the value in the queue
        }}
      >
        +3
      </button>
    </>
  );
}
