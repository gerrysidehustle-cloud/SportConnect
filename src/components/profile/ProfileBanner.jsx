import styles from "./ProfileBanner.module.css";

export default function ProfileBanner({ user }) {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.sportIcons}>
          {user.sports.map((s) => s.icon).join(" ")}
        </div>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>{user.initials}</div>
        </div>

        <div className={styles.text}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.handle}>@{user.handle} · {user.location}</div>
          <div className={styles.bio}>{user.bio}</div>
          <div className={styles.badges}>
            {user.badges.map((b) => (
              <span
                key={b.label}
                className={`${styles.badge} ${b.highlight ? styles.highlight : ""}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <button className={styles.editBtn}>✏ Edit Profile</button>
      </div>

      <div className={styles.statsRow}>
        {[
          { val: user.totalSessions.toLocaleString(), label: "Total Sessions" },
          { val: user.yearsActive, label: "Years Active" },
          { val: user.sports.length, label: "Sports" },
          { val: user.followers, label: "Followers" },
          { val: user.following, label: "Following" },
        ].map(({ val, label }) => (
          <div key={label} className={styles.stat}>
            <div className={styles.statVal}>{val}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
