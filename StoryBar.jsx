import React from "react";

export default function StoryBar() {
  const stories = [
    { id: 1, img: "/images/story1.jpg", name: "john" },
    { id: 2, img: "/images/profile1.jpg", name: "emma" },
    { id: 3, img: "/images/profile2.jpg", name: "sara" }
  ];

  return (
    <div className="story-bar">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.img} alt="story" className="story-img" />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
}
