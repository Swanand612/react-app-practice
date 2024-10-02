// when writing javascript, variable. just make sure you add it under a  { } curly brace.
// to add a html markup in the function, add it under ( ) function brackets.

function Item({ isPacked, name }) {
  let itemCount = name;
  if (isPacked) {
    itemCount = <del>{name + "π"}</del>;
  }
  return (
    // <li className="item">
    //     {isPacked ? (<del> {name + '∑'}</del>) : name}
    // </li>

    <li className="item">
      {/* {name} {isPacked && '†'}  */}
      {itemCount}
    </li>
    // if isPacked is true && {then} render the † else nothing
    // in react && renders the right side value if left is true, else complete false
    // in case of numbers make sure, we are checking the boolean on the number
    // messageCount > 0 && <p> render this </p>
  );
}

export default function Packed() {
  return (
    <section>
      <h1>Packing list</h1>
      <ul>
        <Item isPacked={true} name="Shampoo" />
        <Item isPacked={true} name="sdas" />
        <Item isPacked={false} name="asdas" />
      </ul>
    </section>
  );
}
1;
