import React, { useState } from "react";

const GithubInfo = () => {
  const [userName, setUserName] = useState("");
  const [chartUrl, setChartUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const getChart = () => {
    if (userName === "") {
      setError("Please enter a username");
      setChartUrl("");
      return;
    }

    setError("");
    setChartUrl(
      `https://github-readme-activity-graph.vercel.app/graph?userName=${userName}`,
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={userName}
        onChange={handleChange}
      />

      <button onClick={getChart}>Show Chart</button>

      {error ? <p>{error}</p> : null}

      {chartUrl ? (
        <div>
          <h2>GitHub Contribution Chart</h2>
          <img src={chartUrl} alt="GitHub contribution chart" />
        </div>
      ) : null}
    </div>
  );
};

export default GithubInfo;


