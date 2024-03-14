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
  //const url = `/src/data/details.json`;
  //const url =`http://localhost:3001/api/planets/`
  const url = config.serverUrl + "/api/planets";

  useEffect(() => {
    fetchData(url) // Adjust the path to your JSON file
      .then((fetchedData) => {
        if (fetchedData && fetchedData[planetId]) {
          setPlanetDetails(fetchedData[planetId]);
        } else {
          console.error(`Planet with ID ${planetId} not found.`);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [planetId, url]);

  return (
    <main className={styles["main"]}>
      <section className={styles["card-component"]}>
        <div className={styles["card-desc"]}>
          <h3>{planetDetails.name}</h3>
          <p>{planetDetails.description}</p>
          <h4>I. Details</h4>
          <p>{planetDetails.details}</p>
          <h4>II. Journey Duration</h4>
          <p>{planetDetails.duration}</p>
          <h4>III. Spaceship</h4>
          <p>{planetDetails.spaceship}</p>
          <h4>IV. Crew</h4>
          <p>{planetDetails.crew}</p>
          <h4>V. Price</h4>
          <p>{planetDetails.price}</p>
          <Link to={`/solarSystem`} className={styles["btn-a"]}>
            <div className={styles["continue-btn"]}>Go back</div>
          </Link>
        </div>
        <div className="planetImg">
          <img
            src={planetDetails.image}
            alt={planetDetails.name}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
};

export default PlanetDetails;
