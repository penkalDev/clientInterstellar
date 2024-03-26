import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./PlanetDetails.module.css";
import config from "../../config.js";

// import { Link } from "react-router-dom";
import fetchData from "../../services/dataFetcher.js";

const PlanetDetails = () => {
  const { planetId } = useParams();
  const [planetDetails, setPlanetDetails] = useState([]);

  const url = config.serverUrl + "/api/planets";

  useEffect(() => {
    fetchData(url)
      .then((fetchedData) => {
        if (fetchedData) {
          const sortedPlanets = Object.values(fetchedData).sort((a, b) => {
            return a.id - b.id;
          });
          setPlanetDetails(sortedPlanets);
        } else {
          console.error("No data fetched.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  const planetIndex = parseInt(planetId);
  const selectedPlanet = planetDetails[planetIndex];

  return (
    <main className={styles["main"]}>
      <section className={styles["card-component"]}>
        <div className={styles["card-desc"]}>
          <h3>{selectedPlanet?.name}</h3>
          <p>{selectedPlanet?.description}</p>
          <h4>I. Details</h4>
          <p>{selectedPlanet?.details}</p>
          <h4>II. Journey Duration</h4>
          <p>{selectedPlanet?.duration}</p>
          <h4>III. Spaceship</h4>
          <p>{selectedPlanet?.spaceship}</p>
          <h4>IV. Crew</h4>
          <p>{selectedPlanet?.crew}</p>
          <h4>V. Price</h4>
          <p>{selectedPlanet?.price}</p>
          <Link to={`/solarSystem`} className={styles["btn-a"]}>
            <div className={styles["continue-btn"]}>Go back</div>
          </Link>
        </div>
        <div className="planetImg">
          <img
            src={selectedPlanet?.image}
            alt={selectedPlanet?.name}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default PlanetDetails;
