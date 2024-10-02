"use client";

export default function Events() {
  function handleOnClick() {
    alert("Message");
  }

  return <Button handleEvent={handleOnClick}>Click me</Button>;
}

function Button({ handleEvent, children }) {
  return <button onClick={handleEvent}>{children}</button>;
}
