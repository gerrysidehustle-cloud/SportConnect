"use client";
import { useState } from "react";
import styles from "./Profile.module.css";
import ProfileBanner from "./ProfileBanner";
import SportCard from "./SportCard";
import AchievementCard from "./AchievementCard";
import PostCard from "../feed/PostCard";
import { currentUser, feedPosts } from "../../lib/data";

const TABS = [
  { id: "sports", label: "🏅 Sports" },
  { id: "achievements", label: "🏆 Achievements" },
  { id: "activity", label: "📊 Activity" },
];

export default function Profile() {
  const [tab, setTab] = useState("sports");
  const user = currentUser;

  return (
    <div className={styles.page}>
      <ProfileBanner user={user} />

      <div className={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`${styles.tabBtn} ${tab === t.id ? styles.active : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "sports" && (
        <div className={styles.sportsGrid}>
          {user.sports.map((s) => (
            <SportCard key={s.id} sport={s} />
          ))}
        </div>
      )}

      {tab === "achievements" && (
        <div className={styles.achievementsGrid}>
          {user.achievements.map((a) => (
            <AchievementCard key={a.title} achievement={a} />
          ))}
        </div>
      )}

      {tab === "activity" && (
        <div className={styles.activity}>
          {feedPosts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={{ ...post, user: user.name, initials: user.initials, avatarColor: user.avatarColor }} />
          ))}
        </div>
      )}
    </div>
  );
}
