import React from "react";

const HistoryTable = ({ history }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <h3>📜 Claim History</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, idx) => (
            <tr key={idx}>
              <td>{item.userId?.name || "Unknown"}</td>
              <td>{item.pointsClaimed}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
