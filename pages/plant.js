const drink = {
  tea: {
    part: "leaf",
    content: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    content: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

function Drink({ name }) {
  const info = drink[name];

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.content}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
