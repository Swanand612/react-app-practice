import { useState, useEffect, useRef } from "react";
import "../styles/dashboard.css";
import "../styles/login.css";
import { useRouter } from "next/router";
import users from "../data/users.json";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import TopNavBar from "./TopNavBar";
import SidebarMenu from "./SidebarMenu";

export default function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const menuRef = useRef(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data.message);
      setShowSignUpModal(false);
      setShowLoginModal(true);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      if (user.isBlocked) {
        alert(
          "Your account has been blocked. Please contact the administrator."
        );
      } else {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setIsAdmin(user.role === "admin");
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUsername("");
        setPassword("");
        setShowLoginModal(false);
        router.push("/");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    router.push("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("hamburger")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", closeMenu);
    return () => {
      router.events.off("routeChangeComplete", closeMenu);
    };
  }, [router]);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setCurrentUser(user);
      setIsAdmin(user.role === "admin");
    }
  }, []);

  return (
    <div className="dashboard">
      <TopNavBar
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        currentUser={currentUser}
        handleLogout={handleLogout}
        setShowLoginModal={setShowLoginModal}
        setShowSignUpModal={setShowSignUpModal}
        toggleMenu={toggleMenu}
      />

      <div className="content-wrapper">
        {isLoggedIn ? (
          <>
            <SidebarMenu
              isMenuOpen={isMenuOpen}
              menuRef={menuRef}
              closeMenu={closeMenu}
            />
            <main className="main-content">{children}</main>
          </>
        ) : (
          <div className="login-message">
            <h2>Please log in to view the dashboard</h2>
          </div>
        )}
      </div>
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSignUp={handleSignUp}
      />
    </div>
  );
}
