"use client";
import { useState } from "react";
import styles from "./Explore.module.css";
import AthleteCard from "./AthleteCard";
import { athletes } from "../../lib/data";

const SPORT_FILTERS = ["All", "🏀 Basketball", "🏊 Swimming", "🎾 Tennis", "⚽ Soccer", "🚴 Cycling", "🥊 Boxing", "🏃 Running"];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = athletes.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.sports.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter =
      filter === "All" || a.sports.some((s) => s === filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>🔍 Explore Athletes</h1>
        <input
          type="text"
          className={styles.search}
          placeholder="Search athletes or sports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.filters}>
        {SPORT_FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>No athletes found for &quot;{search}&quot;</div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((a) => (
            <AthleteCard key={a.id} athlete={a} />
          ))}
        </div>
      )}
    </div>
  );
}
