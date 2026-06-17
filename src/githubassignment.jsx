import React, { useState } from "react";
import axios from "axios";

const GithubInfo = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const getInfo = async () => {
    try {
      setError("");

      const response = await axios.get(
        `https://api.github.com/users/${userName}`,
      );

      setUserData(response.data);
    } catch (err) {
      setError("User not found");
      setUserData(null);
    }
  };

  let content;

  if (error) {
    content = <p>{error}</p>;
  } else if (userData) {
    content = (
      <div>
        <img src={userData.avatar_url} alt={userData.login} width="150" />
        <h2>{userData.name}</h2>
        <p>Username: {userData.login}</p>
        <p>Bio: {userData.bio}</p>
        <p>Public Repos: {userData.public_repos}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <a href={userData.html_url} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </div>
    );
  } else {
    content = <p></p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={handleChange}
      />

      <button onClick={getInfo}>Search</button>

      {content}
    </div>
  );
};

export default GithubInfo;
