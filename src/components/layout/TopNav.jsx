"use client";
import styles from "./TopNav.module.css";

export default function TopNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "feed", label: "⚡ Feed" },
    { id: "profile", label: "👤 Profile" },
    { id: "explore", label: "🔍 Explore" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        ⚡<span>SPORT</span>CONNECT
      </div>

      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`${styles.tab} ${activeTab === t.id ? styles.active : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.avatar}>JR</div>
    </nav>
  );
}
