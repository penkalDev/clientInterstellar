import Card from "./Card/Card";
import styles from "./SolarSystem.module.css";
import fetchData from "../../services/dataFetcher.js";
import { useEffect, useState } from "react";
import config from "../../config.js";

const SolarSystem = () => {
  const [data, setData] = useState([]);
  const url = config.serverUrl+"/api/planets"
 // const url = "http://localhost:3001/api/planets";
  //const url = `src/data/planets.json`;

  useEffect(() => {
    fetchData(url) // Adjust the path to your JSON file
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);
  const sortedData = [...data].sort((a, b) => a.id - b.id);

  return (
    <main className={styles["main"]}>
      <section className={styles["cards"]}>
        {sortedData.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </section>
    </main>
  );
};

export default SolarSystem;
