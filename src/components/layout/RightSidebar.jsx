"use client";
import styles from "./RightSidebar.module.css";
import { friends, trending, currentUser } from "../../lib/data";

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* Active Friends */}
      <div>
        <div className={styles.sectionTitle}>Active Friends</div>
        <div className={styles.friendsList}>
          {friends.map((f) => (
            <div key={f.id} className={styles.friendRow}>
              <div className={styles.friendAvatar} style={{ background: f.color }}>
                {f.initials}
                <span className={`${styles.statusDot} ${styles[f.status]}`} />
              </div>
              <div className={styles.friendName}>{f.name}</div>
              <span className={styles.friendSport}>{f.sport}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div>
        <div className={styles.sectionTitle}>Trending</div>
        <div className={styles.trendingList}>
          {trending.map((t) => (
            <div key={t.tag} className={styles.trendingItem}>
              <div className={styles.trendingTag}>{t.tag}</div>
              <div className={styles.trendingCount}>{t.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <div className={styles.sectionTitle}>Upcoming Sessions</div>
        <div className={styles.sessionsList}>
          {currentUser.upcomingSessions.map((s) => (
            <div key={s.title} className={styles.sessionItem}>
              <span className={styles.sessionSport}>{s.sport}</span>
              <div>
                <div className={styles.sessionTitle}>{s.title}</div>
                <div className={styles.sessionTime}>{s.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
