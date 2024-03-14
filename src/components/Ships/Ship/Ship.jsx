import styles from "./Ship.module.css";

const Ship = (ship) => {
  return (
    <div key={ship.id} className={styles["card-component"]}>
      <div className={styles["card-image"]}>
        <img src={ship.image} alt={ship.name} />
      </div>
      <div className={styles["card-desc"]}>
        <h2 className={styles["shipName"]}>{ship.name}</h2>
        <p>{ship.description}</p>
        <div className={styles["ship-info"]}>
          <p>Passengers: {ship.passengers}</p>
          <p>Max Velocity: {ship.maxSpeed}</p>
          <p>Crew: {ship.crew}</p>
        </div>
      </div>
    </div>
  );
};

export default Ship;
