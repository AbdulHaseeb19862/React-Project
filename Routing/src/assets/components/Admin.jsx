import React from "react";

function Admin({ current_users }) {
  return current_users.admin === "Admin" ? (
    <div>
      <h1>Welcome To Admin Role</h1>
    </div>
  ) : (
    <div>you can't access</div>
  );
}

export default Admin;
