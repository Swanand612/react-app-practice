import NavMenu from "./NavMenu";
import { Button } from "@mui/material";

export default function TopNavBar({
  isLoggedIn,
  isAdmin,
  currentUser,
  handleLogout,
  setShowLoginModal,
  setShowSignUpModal,
  toggleMenu,
}) {
  return (
    <header className="top-nav">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <NavMenu isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
      <div className="login">
        {isLoggedIn ? (
          <div>
            <span className="username">Welcome, {currentUser.username}</span>

            <Button onClick={handleLogout} variant="contained">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button onClick={() => setShowLoginModal(true)} variant="contained">
              Login
            </Button>

            <Button
              onClick={() => setShowSignUpModal(true)}
              variant="contained"
            >
              Signup
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
