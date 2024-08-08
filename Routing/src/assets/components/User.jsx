import React from "react";

function User({ current_users }) {
  return current_users === "Admin" || current_users === "Registered" ? (
    <div>
      <h1>Welcome To User Role</h1>
    </div>
  ) : (
    <div>You can't access</div>
  );
}

export default User;
