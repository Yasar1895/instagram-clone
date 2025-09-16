import React from "react";
import StoryBar from "../components/StoryBar";
import PostCard from "../components/PostCard";

export default function Feed() {
  const posts = [
    {
      id: 1,
      username: "john",
      userImg: "/images/profile1.jpg",
      image: "/images/post1.jpg",
      caption: "Loving the vibes 🌸",
      likes: 120
    },
    {
      id: 2,
      username: "emma",
      userImg: "/images/profile2.jpg",
      image: "/images/post2.jpg",
      caption: "Another day in paradise 🌴",
      likes: 89
    }
  ];

  return (
    <div className="feed">
      <StoryBar />
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
