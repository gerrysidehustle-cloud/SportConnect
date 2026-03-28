"use client";
import { useState } from "react";
import styles from "./PostComposer.module.css";

export default function PostComposer() {
  const [text, setText] = useState("");

  return (
    <div className={styles.composer}>
      <div className={styles.avatar}>JR</div>
      <div className={styles.body}>
        <textarea
          className={styles.input}
          placeholder="Share your latest session, achievement, or challenge..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />
        <div className={styles.actions}>
          <button className={styles.tag}>🏀 Sport</button>
          <button className={styles.tag}>⏱ Session</button>
          <button className={styles.tag}>📸 Photo</button>
          <button className={styles.tag}>🏆 Achievement</button>
          <button
            className={styles.postBtn}
            disabled={!text.trim()}
            onClick={() => setText("")}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
}
