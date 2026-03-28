import styles from "./AchievementCard.module.css";

export default function AchievementCard({ achievement }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{achievement.icon}</div>
      <div className={styles.title}>{achievement.title}</div>
      <div className={styles.desc}>{achievement.desc}</div>
      <div className={styles.date}>{achievement.date}</div>
    </div>
  );
}
