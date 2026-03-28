"use client";
import { useState } from "react";
import TopNav from "./TopNav";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "../feed/Feed";
import Profile from "../profile/Profile";
import Explore from "../explore/Explore";
import styles from "./AppShell.module.css";

export default function AppShell() {
  const [activeTab, setActiveTab] = useState("feed");

  const renderMain = () => {
    if (activeTab === "feed") return <Feed />;
    if (activeTab === "profile") return <Profile />;
    if (activeTab === "explore") return <Explore />;
    return null;
  };

  return (
    <div className={styles.shell}>
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.body}>
        <div className={styles.leftWrap}>
          <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className={styles.main}>{renderMain()}</main>
        <div className={styles.rightWrap}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
