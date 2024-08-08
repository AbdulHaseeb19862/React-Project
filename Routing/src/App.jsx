import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./assets/components/Home";
import Admin from "./assets/components/Admin";
import NavBar from "./assets/components/NavBar";
import User from "./assets/components/User";

function App() {
  const users = {
    registered: "Registered",
    public: "public",
    admin: "Admin",
  };
  const current_users = users.public;
  return (
    <>
      <BrowserRouter>
        <NavBar current_users={current_users} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/admin"
            element={<Admin current_users={current_users} />}
          ></Route>
          <Route
            path="/user"
            element={<User current_users={current_users} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
