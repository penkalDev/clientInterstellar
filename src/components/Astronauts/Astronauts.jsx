import fetchData from "../../services/dataFetcher.js";
import styles from "./Astronauts.module.css";
import Astronaut from "./Astronaut/Astronaut.jsx";
import { useEffect, useState } from "react";
import config from "../../config.js";




const Astronauts = () => {
  
  const [astronauts, setAstronauts] = useState([]);
  const url = config.serverUrl+"/api/astronauts";  // External server on Raspberry Pi
  //const url = "http://localhost:3001/api/astronauts";  Local server
  //const url = `src/data/astronauts.json`;   File with data

  useEffect(() => {
    fetchData(url) // Adjust the path to your JSON file
      .then((fetchedData) => {
        setAstronauts(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
     
  },[url]);
  

  



  return (
    <main className={styles['main']}>
    <section className={styles['cards']}>
        {astronauts.map((astronauts) => (
            <Astronaut key={astronauts.id} {...astronauts} />
        ))}
    </section>
</main>
  )
}

export default Astronauts