// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileEdit from "./components/ProfileEdit";
import UserDetails from "./components/UserDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileEdit />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
