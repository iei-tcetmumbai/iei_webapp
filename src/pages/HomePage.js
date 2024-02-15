import React from "react";
import Navbar from "../components/Navbar";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Box />
    </div>
  );
}

function Box() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.heading}>
          <p
            className={`${styles["text-flicker-in-glow"]} ${styles["iei-text"]}`}
          >
            IEI TCET
          </p>
        </div>
      </div>
      <div className={styles.slogan}>
        <p className={styles.trackinginexpand}>
          Promoting excellence in engineering <br /> <span>since 2023...</span>
        </p>
      </div>
    </>
  );
}
