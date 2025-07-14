import React from "react";

const Leaderboard = ({ leaderboard }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Leaderboard</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, idx) => (
            <tr key={idx}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
