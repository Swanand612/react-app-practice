import { Button } from "@mui/material";
import { NavLink } from "./NavMenu";

export default function SidebarMenu({ isMenuOpen, menuRef, closeMenu }) {
  return (
    <aside ref={menuRef} className={`left-nav ${isMenuOpen ? "open" : ""}`}>
      <nav>
        <ul>
          <li>
            <NavLink href="/gallery" closeMenu={closeMenu}>
              <Button variant="text">Gallery</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/todo" closeMenu={closeMenu}>
              <Button variant="text">Todo</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/packed" closeMenu={closeMenu}>
              <Button variant="text">Packed</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/plant" closeMenu={closeMenu}>
              <Button variant="text">Plant</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/list" closeMenu={closeMenu}>
              <Button variant="text">List</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/interactivity" closeMenu={closeMenu}>
              <Button variant="text">Interactivity</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/events" closeMenu={closeMenu}>
              <Button variant="text">Events</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/updater" closeMenu={closeMenu}>
              <Button variant="text">Updater</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/junction" closeMenu={closeMenu}>
              <Button variant="text">Junction</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/accordion" closeMenu={closeMenu}>
              <Button variant="text">Accordion</Button>
            </NavLink>
          </li>
          <li>
            <NavLink href="/retro" closeMenu={closeMenu}>
              <Button variant="text">Retro</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
