import styles from "./SportCard.module.css";

export default function SportCard({ sport }) {
  const pct = Math.min(Math.round((sport.years / 10) * 100), 100);

  return (
    <div className={styles.card} style={{ "--sport-color": sport.color }}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>{sport.icon}</div>
        <div>
          <div className={styles.title}>{sport.name}</div>
          <div className={styles.level}>{sport.level}</div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.metric}>
          <div className={styles.metricVal}>{sport.years}yr</div>
          <div className={styles.metricLabel}>Experience</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.metricVal}>{sport.frequency}</div>
          <div className={styles.metricLabel}>Frequency</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.metricVal}>{sport.sessions.toLocaleString()}</div>
          <div className={styles.metricLabel}>Sessions</div>
        </div>
        <div className={styles.metric}>
          <div className={styles.metricVal}>{sport.streak}🔥</div>
          <div className={styles.metricLabel}>Streak</div>
        </div>
      </div>

      <div className={styles.progressWrap}>
        <div className={styles.progressLabel}>
          <span>Skill Progress</span>
          <span className={styles.pct}>{pct}%</span>
        </div>
        <div className={styles.trackBg}>
          <div className={styles.trackFill} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
