import { getImageUrl } from "./utils";
import { people } from "../data/data.js";
import { useState } from "react";

let chemists = [],
  everyoneelse = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else everyoneelse.push(person);
});

export default function List() {
  return (
    <article>
      <ListItem title="Chemists" people={chemists} />
      <ListItem title="Everyone else" people={everyoneelse} />
      <ArrayInsertion />
      <ReverseList />
    </article>
  );
}

export function ListItem({ title, people }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function ArrayInsertion() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick(e) {
    const insertId = 1;
    const newArtists = [
      ...artists.slice(0, insertId),
      { id: nextId++, name: name },
      ...artists.slice(insertId),
    ];
    setArtists(newArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Click me</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
  { id: 3, title: "Merracotta Army" },
  { id: 4, title: "Queerracotta Army" },
  { id: 5, title: "Gayracotta Army" },
];

export function ReverseList() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const newList = [...list];
    newList.reverse();
    setList(newList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((li) => (
          <li key={li.id}>{li.title}</li>
        ))}
      </ul>
    </>
  );
}
