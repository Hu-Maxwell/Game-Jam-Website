import { useEffect } from 'react';

import styles from "./slider.module.css";

const Slider = ({time, setTime}) => {
  const milisecondsInHour = (60 * 60 * 1000);

  // apr 11 
  // 8 pm
  const eventStart = new Date('2025-04-11T20:00:00');
  const eventTime = (44 * milisecondsInHour);
  const eventEnd = new Date(eventStart.getTime() + eventTime);

  useEffect(() => {
    const now = new Date();

    if (now < eventStart) { setTime(0); } 
    else if (now > eventEnd) { setTime(44); } 
    else {
      const deltaTime = now - eventStart;   
      const hoursElapsed = deltaTime / (milisecondsInHour); 
      setTime(Math.floor(hoursElapsed)); 
    }
  }, []);

  return (
  <div className={styles.sliderContainer}>
    <div className={styles.scheduleText}>
      {/* change this text to: X hours until the current time selected */}
    </div>

    <div className={styles.sliderRow}>
      <div className={styles.timeLabel}>{time} hours</div>

      <input
        type="range"
        min="0"
        max="44"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value))}
        className={styles.slider}
      />

      <div className={styles.timeLabel}>{44 - time} hours left</div>
    </div>
  </div>

  );
};
export default Slider; 