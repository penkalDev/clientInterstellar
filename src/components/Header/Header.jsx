import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  let headerStyle = "";
  if (location.pathname === "/" || location.pathname === "/form") {
    headerStyle = styles.transparentBack;
  } else {
    headerStyle = styles.defaultBack;
  }
  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      if (currentScrollY > 20) {
        setShow(false);
      }
    } else {
      setShow(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  // Hamburger menu

  return (
    <header className={styles["header"]}>
      <nav
        className={`${styles["header-nav"]} ${
          show ? styles.showNav : styles.hideNav
        } ${headerStyle}`}
      >
        <ul className={["menu"]}>
          <li className={styles["nav-li"]}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "var(--main-color)" : "",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={styles["nav-li"]}>
            <NavLink
              to="/solarSystem"
              style={({ isActive }) => {
                return {
                  color: isActive ? "var(--main-color)" : "",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Destinations
            </NavLink>
          </li>
          <li className={styles["nav-li"]}>
            <NavLink
              to="/famousAstronauts"
              style={({ isActive }) => ({
                color: isActive ? "var(--main-color)" : "", // Set the color for the active NavLink
                textDecoration: isActive ? "underline" : "none", // Add underline when active
              })}
            >
              Crew
            </NavLink>
          </li>

          <li className={styles["nav-li"]}>
            <NavLink
              to="/fleet"
              style={({ isActive }) => {
                return {
                  color: isActive ? "var(--main-color)" : "",
                  textDecoration: isActive ? "underline" : "none",
                };
              }}
            >
              Fleet
            </NavLink>
          </li>
        </ul>
        <h1>
          {" "}
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "var(--main-color)" : "",
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            <span className={styles["space-span"]}>Interstellar</span>
            <span className={styles["explorer-span"]}>Traveler</span><span style={{ color: "var(--main-color)" }}>&trade;</span>

          </NavLink>
        </h1>
      </nav>
    </header>
  );
}
