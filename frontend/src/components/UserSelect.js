import React from "react";

const UserSelect = ({
  users,
  selectedUserId,
  setSelectedUserId,
  claimPoints,
}) => {
  return (
    <div>
      <select
        onChange={(e) => setSelectedUserId(e.target.value)}
        value={selectedUserId}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={claimPoints} style={{ marginLeft: "10px" }}>
        Claim
      </button>
    </div>
  );
};

export default UserSelect;
