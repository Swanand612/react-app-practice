const today = new Date();

const person = {
  name: "Swanand",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>
        {person.name} TodoList for {formatDate(today)}
      </h1>
      <ul>
        <li>bring this</li>
        <li>bring this</li>
        <li>bring this</li>
      </ul>
    </div>
  );
}
