import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import UserSelect from "./components/UserSelect";
import AddUserForm from "./components/AddUserForm";
import Leaderboard from "./components/Leaderboard";
import HistoryTable from "./components/HistoryTable";

const API = process.env.REACT_APP_API_URL || "";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [message, setMessage] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // dark mode default
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "false") setDarkMode(false);
  }, []);

  useEffect(() => {
    axios.get(`${API}/api/users`).then((res) => setUsers(res.data));
    fetchLeaderboard();
    fetchHistory();
  }, []);

  const fetchLeaderboard = () => {
    axios
      .get(`${API}/api/leaderboard`)
      .then((res) => setLeaderboard(res.data))
      .catch((err) => console.error("Leaderboard error:", err));
  };

  const fetchHistory = (pageNum = 1) => {
    axios
      .get(`${API}/api/history?page=${pageNum}&limit=5`)
      .then((res) => {
        setHistory(res.data.data);
        setPage(res.data.page);
        setPages(res.data.pages);
      })
      .catch((err) => console.error("History error:", err));
  };

  const claimPoints = () => {
    if (!selectedUserId) return alert("Please select a user");

    axios
      .post(`${API}/api/users/${selectedUserId}/claim`)
      .then((res) => {
        setMessage(res.data.message);
        fetchLeaderboard();
        fetchHistory(page);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="container">
        <div style={{ padding: "20px" }}>
          <h2>🏆 Leaderboard</h2>

          <UserSelect
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            claimPoints={claimPoints}
          />

          <AddUserForm
            newUserName={newUserName}
            setNewUserName={setNewUserName}
            setUsers={setUsers}
          />

          <Leaderboard leaderboard={leaderboard} />
          {message && <p>{message}</p>}
        </div>

        <HistoryTable
          history={history}
          page={page}
          pages={pages}
          onPageChange={fetchHistory}
        />
      </div>
    </>
  );
}

export default App;
