import React, { useState } from "react";
import CommentBox from "./CommentBox";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.userImg} alt="profile" className="profile-pic" />
        <span>{post.username}</span>
      </div>
      <img src={post.image} alt="post" className="post-img" />
      <div className="post-actions">
        <button onClick={toggleLike}>{liked ? "❤️" : "🤍"}</button>
        <span>{likes} likes</span>
      </div>
      <p><strong>{post.username}</strong> {post.caption}</p>
      <CommentBox />
    </div>
  );
}
