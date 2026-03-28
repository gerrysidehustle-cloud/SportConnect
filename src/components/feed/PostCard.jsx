"use client";
import { useState } from "react";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} style={{ background: post.avatarColor }}>
          {post.initials}
        </div>
        <div className={styles.meta}>
          <div className={styles.name}>{post.user}</div>
          <div className={styles.sub}>
            <span className={styles.sport}>{post.sport}</span>
            {" · "}
            {post.time}
          </div>
        </div>
        <div className={styles.more}>···</div>
      </div>

      <p className={styles.content}>{post.content}</p>

      <div className={styles.statsBar}>
        {post.stats.distance && (
          <div className={styles.statPill}>
            <div className={styles.statVal}>{post.stats.distance}</div>
            <div className={styles.statLabel}>Distance</div>
          </div>
        )}
        <div className={styles.statPill}>
          <div className={styles.statVal}>{post.stats.duration}</div>
          <div className={styles.statLabel}>Duration</div>
        </div>
        <div className={styles.statPill}>
          <div className={styles.statVal}>{post.stats.calories}</div>
          <div className={styles.statLabel}>Calories</div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={`${styles.actionBtn} ${liked ? styles.liked : ""}`}
          onClick={() => setLiked((p) => !p)}
        >
          {liked ? "🔥" : "🤍"} {post.likes + (liked ? 1 : 0)}
        </button>
        <button className={styles.actionBtn}>💬 {post.comments}</button>
        <button className={styles.actionBtn}>↗ {post.reposts}</button>
        <button className={styles.actionBtn}>⊕ Save</button>
      </div>
    </article>
  );
}
