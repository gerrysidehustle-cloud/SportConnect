"use client";
import { useState } from "react";
import styles from "./AthleteCard.module.css";

export default function AthleteCard({ athlete }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className={styles.card} style={{ "--athlete-color": athlete.color }}>
      <div className={styles.header}>
        <div className={styles.avatar} style={{ background: athlete.color }}>
          {athlete.initials}
        </div>
        <div>
          <div className={styles.name}>{athlete.name}</div>
          <div className={styles.followers}>{athlete.followers} followers</div>
        </div>
      </div>

      <div className={styles.sports}>
        {athlete.sports.map((s) => (
          <span key={s} className={styles.sportTag}>{s}</span>
        ))}
      </div>

      <div className={styles.footer}>
        <div>
          <div className={styles.sessionVal}>{athlete.sessions.toLocaleString()}</div>
          <div className={styles.sessionLabel}>Sessions</div>
        </div>
        <button
          className={`${styles.followBtn} ${following ? styles.following : ""}`}
          onClick={() => setFollowing((p) => !p)}
        >
          {following ? "✓ Following" : "+ Follow"}
        </button>
      </div>
    </div>
  );
}
