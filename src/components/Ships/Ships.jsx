import fetchData from "../../services/dataFetcher.js";
import styles from "./Ships.module.css";
import Ship from "./Ship/Ship.jsx";
import { useEffect, useState } from "react";
import config from "../../config.js";

const Ships = () => {
  const [ships, setShips] = useState([]);
  const url = config.serverUrl+"/api/ships"; 
  //const url = "http://localhost:3001/api/ships";
  //const url = `src/data/ships.json`;

  useEffect(() => {
    fetchData(url) // Adjust the path to your JSON file
      .then((fetchedData) => {
        setShips(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  console.log(ships);
  return (
    <main className={styles["main"]}>
      <section className={styles["cards"]}>
        {ships.map((ships) => (
          <Ship key={ships.id} {...ships} />
        ))}
      </section>
    </main>
  );
};

export default Ships;
