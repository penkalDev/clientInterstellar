/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(data) {
  return (
   
      <div key={data.id} className={styles["card-component"]}>
        <div className={styles["card-image"]}>
          <img src={data.image}  alt={data.name} />
         
          <Link to={`/details/planets/${data.id}`} className={styles["btn-a"]}>
            <div className={styles["continue-btn"]}>More info</div>
          </Link>
        </div>
        <div className={styles["card-desc"]}>
          <h2>{data.name}</h2>
          <p>{data.description}</p>

          <p><strong>Duration:</strong> {data.duration}</p>
          <p><strong>Price:</strong> {data.price}</p>
          <p><strong>Highlights:</strong> {data.highlights}</p>
          
        </div>
      </div>
    
  );
}

export default Card;
