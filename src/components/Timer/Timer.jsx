import { useState, useEffect } from "react";
import styles from "../Timer/Timer.module.css";
import { Link } from "react-router-dom";

const CountdownClock = () => {
  const targetDate = new Date("2025-08-26T23:59:59").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    // Calculate time remaining immediately
    calculateTimeRemaining();

    // Start the interval to update the time remaining every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className={styles["countdown-clock"]}>
      <h1>Our first launch will take place in:</h1>
      <div className={styles["clock"]}>
        {timeRemaining.days} Days {timeRemaining.hours} Hours{" "}
        {timeRemaining.minutes} Minutes {timeRemaining.seconds} Seconds
      </div>
      <Link to={`/form`} className={styles["btn-a"]}>
        <div className={styles["continue-btn"]}>Check availability</div>
      </Link>
    </div>
  );
};

export default CountdownClock;
