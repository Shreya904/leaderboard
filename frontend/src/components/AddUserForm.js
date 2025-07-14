import React from "react";
import axios from "axios";

const AddUserForm = ({ newUserName, setNewUserName, setUsers }) => {
  const handleAdd = () => {
    if (!newUserName.trim()) return alert("Name is required");
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/users`, { name: newUserName })
      .then((res) => {
        setUsers((prev) => [...prev, res.data]);
        setNewUserName("");
      })
      .catch(() => alert("Failed to add user"));
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Enter new user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
};

export default AddUserForm;
