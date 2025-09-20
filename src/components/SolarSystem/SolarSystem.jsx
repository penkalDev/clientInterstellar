
import Card from "./Card/Card";
import styles from "./SolarSystem.module.css";
import fetchData from "../../services/dataFetcher.js";
import { useEffect, useState } from "react";
import config from "../../config.js";

const SolarSystem = () => {
  const [data, setData] = useState([]);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false); // Dodajemy stan do kontrolowania wyświetlania komunikatu
  const url = config.serverUrl + "/api/planets";

  useEffect(() => {
    let fetchDataTimeout; // Deklarujemy zmienną przechowującą timeout

    const fetchDataAndUpdateState = async () => {
      try {
        fetchDataTimeout = setTimeout(() => {
          setShowLoadingMessage(true); // Wyświetlamy komunikat po upływie 1 sekundy
        }, 200);

        const fetchedData = await fetchData(url);
        clearTimeout(fetchDataTimeout); // Usuwamy timeout, jeśli pobranie danych zakończy się pomyślnie
        setData(fetchedData);
        setShowLoadingMessage(false); // Ukrywamy komunikat po pobraniu danych
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowLoadingMessage(false); // Ukrywamy komunikat w przypadku błędu
      }
    };

    fetchDataAndUpdateState();

    return () => {
      clearTimeout(fetchDataTimeout); // Usuwamy timeout w przypadku odmontowania komponentu
    };
  }, [url]);

  const sortedData = [...data].sort((a, b) => a.id - b.id);

  return (
    <main className={styles["main"]}>
      {showLoadingMessage && (
        <div className={styles["loading-screen"]}>
          <p className={styles["loading-message"]}>Connecting to server...</p>
        </div>
      )}
      <section className={styles["cards"]}>
        {sortedData.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </section>
    </main>
  );
};

export default SolarSystem;
