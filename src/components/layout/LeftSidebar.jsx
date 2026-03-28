"use client";
import styles from "./LeftSidebar.module.css";
import { currentUser } from "../../lib/data";

const navItems = [
  { icon: "⚡", label: "Feed", tab: "feed" },
  { icon: "👤", label: "My Profile", tab: "profile" },
  { icon: "🏆", label: "Leaderboard", tab: "explore" },
  { icon: "📅", label: "Sessions", tab: "explore" },
  { icon: "👥", label: "Friends", tab: "explore" },
  { icon: "🔔", label: "Notifications", tab: "explore" },
];

export default function LeftSidebar({ activeTab, setActiveTab }) {
  const u = currentUser;

  return (
    <aside className={styles.sidebar}>
      {/* Mini Profile Card */}
      <div className={styles.miniProfile}>
        <div className={styles.miniBanner} />
        <div className={styles.miniBody}>
          <div className={styles.miniAvatar}>{u.initials}</div>
          <div className={styles.miniName}>{u.name}</div>
          <div className={styles.miniHandle}>@{u.handle} · {u.sports.length} sports</div>
          <div className={styles.miniStats}>
            <div className={styles.miniStat}>
              <div className={styles.miniStatVal}>{(u.totalSessions / 1000).toFixed(1)}k</div>
              <div className={styles.miniStatLabel}>Sessions</div>
            </div>
            <div className={styles.miniStat}>
              <div className={styles.miniStatVal}>{u.followers}</div>
              <div className={styles.miniStatLabel}>Friends</div>
            </div>
            <div className={styles.miniStat}>
              <div className={styles.miniStatVal}>12🔥</div>
              <div className={styles.miniStatLabel}>Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div>
        <div className={styles.sectionTitle}>Navigate</div>
        {navItems.map(({ icon, label, tab }) => (
          <div
            key={label}
            className={`${styles.navItem} ${activeTab === tab && (label === "Feed" || label === "My Profile" || (activeTab === "explore" && label !== "Feed" && label !== "My Profile")) ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className={styles.navIcon}>{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </aside>
  );
}
