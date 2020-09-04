import React from "react";
import "./App.css";

import ProfilePreview from "./components/ProfilePreview";

function App() {
  const profileData = [
    {
      username: "Beard Lover",
      thumbnailUrl: "https://images-cdn.9gag.com/photo/aOKgZpR_460s.jpg",
      likeCount: 3,
      bio: "This is my bio.",
    },
    {
      username: "Queen",
      thumbnailUrl:
        "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjIzMzUxODIx/queen-elizabeth-ii-9286165-1-402.jpg",
      likeCount: 1,
      bio: "You are my peasant",
    },
    {
      username: "Nice guy",
      thumbnailUrl:
        "https://m.media-amazon.com/images/I/91VIl9sAfRL._SS500_.jpg",
      likeCount: 0,
      bio: "'Nice guy.'",
    },
  ];

  return (
    <div className="App">
      <h1>Take a Look at These Lovely People</h1>

      {profileData.map((userInfo, i) => {
        return (
          <ProfilePreview
            key={i}
            username={userInfo.username}
            likeCount={userInfo.likeCount}
            bio={userInfo.bio}
            thumbnailUrl={userInfo.thumbnailUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
