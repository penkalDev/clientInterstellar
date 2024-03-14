import styles from "./HomeIntro.module.css";
import { Link } from "react-router-dom";
import Timer from "../../Timer/Timer";

export default function HomeIntro() {
  return (
    <section className={styles["site-intro"]}>
      <div className={styles["intro"]}>
        <h2>
          INTERSTELLAR <span className="traveler">Traveler</span>&trade;
        </h2>
        <p>
          At our space travel center, we invite you to take a leap into the
          unknown, where the mysteries of the universe await your discovery, and
          every visit is a cosmic adventure.
        </p>
        <Link to={`/solarSystem`} className={styles["btn-a"]}>
          <div className={styles["continue-btn"]}>
            Discover our destinations
          </div>
        </Link>
      </div>

      <Timer />
    </section>
  );
}
