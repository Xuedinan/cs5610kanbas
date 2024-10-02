
import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import React from "react";

export default function Labs() {
  return (
    <div>
      <h3>Labs</h3>
      <h5>Student: Xuedinan Gao</h5>
      <h5>Course: CS5610 2024 Fall</h5>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
