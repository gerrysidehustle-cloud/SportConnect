"use client";
import styles from "./Feed.module.css";
import PostComposer from "./PostComposer";
import PostCard from "./PostCard";
import { feedPosts } from "../../lib/data";

export default function Feed() {
  return (
    <div className={styles.feed}>
      <PostComposer />
      {feedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
