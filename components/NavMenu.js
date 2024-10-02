import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({ href, children, closeMenu }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <div className={`nav-link-wrapper ${isActive ? "active" : ""}`}>
      <Link href={href} onClick={closeMenu}>
        {children}
      </Link>
    </div>
  );
};

export default function NavMenu({ isAdmin, isLoggedIn, closeMenu }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink href="/" closeMenu={closeMenu}>
            <Button variant="text">Home</Button>
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" closeMenu={closeMenu}>
            <Button>About</Button>
          </NavLink>
        </li>
        <li>
          <NavLink href="/contact" closeMenu={closeMenu}>
            <Button>Contact</Button>
          </NavLink>
        </li>
        {isAdmin && isLoggedIn && (
          <li>
            <NavLink href="/users" closeMenu={closeMenu}>
              <Button>Users</Button>
            </NavLink>
          </li>
        )}
        {!isAdmin && isLoggedIn && (
          <li>
            <NavLink href="/contact" closeMenu={closeMenu}>
              <Button>Contact Admin</Button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
