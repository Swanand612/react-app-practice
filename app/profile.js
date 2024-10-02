/* eslint-disable @next/next/no-img-element */
export default function Profile() {
  // react functions start with capital letter
  const src = "https://i.imgur.com/MK3eW3As.jpg";
  return (
    <div>
      <Card>
        <Avatar
          person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }}
          size={100}
          src={src}
        />
      </Card>

      <Avatar
        person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }}
        size={50}
        src={src}
      />
      <Avatar
        person={{ name: "Katherine Johnson", imageId: "1bX5QH6" }}
        size={30}
        src={src}
      />
    </div>
  );
}

export function Avatar({
  person = { name: "Swanand", imageId: "sada21" },
  size = 100,
  src,
}) {
  return (
    <img
      className="avatar"
      src={src}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// example if you want to use spread operator to pass props
/**
 * This should be used when all the props incoming to Profile are then passed on to Avatar, without being used
 */
// function Profile(props) {
//     return (
//         <Avatar {...props}/>
//     )
// }

/** passing nexted components in jsx */
/**
 * <Card>
 *  <Avatar />
 * </Card>
 *
 * Card will receive Avatar as children.
 * if the parent has the {children} prop, it can be filled with anything as a child component. in this case we are passing Avatar, but can also
 * pass just string
 */

function Card({ children }) {
  return <div>{children}</div>;
}

/**
 * props are immutable but it is possible to work with changing state of the props in children component, by using state object in parent component
 * function Clock({color, time}) {
 *  return (
 *      <h1 style={color}>
 *          {time}
 *      </h1>
 *  );
 * }
 *
 * in this example the time changes and color changes with a dropdown selection from the parent component
 */
