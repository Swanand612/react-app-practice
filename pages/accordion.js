import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from алма, the Kazakh word for “apple” and is often
        translated as “full of apples”. In fact, the region surrounding Almaty
        is thought to be the ancestral home of the apple, and the wild Malus
        sieversii is considered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
}
export function Panel({ title, isActive, onShow, children }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

/**
 * single source of truth
 *
 * some states live in the bottom, leaf notes, so where inputs are the state will be in that component
 * some states like routing live in parent or top component and then pass it down to the leaf as props
 *
 * for each unique state need to choose the component that will own that state. this helps in keeping a single source of truth.
 * app changes, need to change where state lives
 * part of process
 *
 * “controlled” (driven by props, from parents) or “uncontrolled” (driven by state, by itself).
 */
