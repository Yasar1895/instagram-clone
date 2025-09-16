import React, { useState } from "react";

export default function CommentBox() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="comment-box">
      {comments.map((c, i) => (
        <p key={i}><strong>User:</strong> {c}</p>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAdd}>Post</button>
    </div>
  );
}
