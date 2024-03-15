import styles from "./Footer.module.css";
// import galaxy from "../../assets/Nebula-No-Background1.png";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["upper-footer"]}>
        <p>
          <span className={styles["footer-about"]}>About Us: </span>
          At Interstellar Traveler, we specialize in making your celestial
          dreams come true. As your premier solar system travel agency, we are
          dedicated to offering unparalleled adventures beyond our home planet.
          With a passion for exploration and a commitment to safety, our mission
          is to take you on unforgettable journeys through the wonders of the
          solar system.
        </p>

        {/* <h4>
          <img width="36" height="36" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/FFFFFF/external-github-social-media-tanah-basah-basic-outline-tanah-basah.png" alt="external-github-social-media-tanah-basah-basic-outline-tanah-basah"/>
          <img width="36" height="36" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/FFFFFF/external-linkedin-social-media-tanah-basah-basic-outline-tanah-basah.png" alt="external-linkedin-social-media-tanah-basah-basic-outline-tanah-basah"/>
        </h4> */}
      </div>
      <div className={styles["lower-footer"]}>
        <h1>
          <span className={styles["space-span"]}>Interstellar</span>
          <span className={styles["explorer-span"]}>Traveler</span>
          <span style={{ color: "var(--main-color)" }}>&trade;</span>
        </h1>
      </div>
      <span>&copy; 2023 Designed by Mateusz Penkal</span>
    </footer>
  );
}
