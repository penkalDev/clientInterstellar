import styles from "./Astronaut.module.css";
const Astronaut = (astronauts) => {
  return (
    <section className={styles["card-component"]} key={astronauts.id}>
      <div className={styles["card-image"]}>
        <img src={astronauts.image} alt={astronauts.name} />
        <div className="info">
          <h2>{astronauts.name}</h2>
          <p><strong>Age:</strong>{astronauts.age}</p>
          <p><strong>Nationality:</strong>{astronauts.nationality}</p>
          <p><strong>Experience:</strong>{astronauts.experience} years</p>
          <p><strong>Ship:</strong>{astronauts.ship}</p>
        </div>
      </div>
      <div className={styles["card-desc"]}>
        <p>{astronauts.description}</p>
      </div>
    </section>
  );
};

export default Astronaut;
