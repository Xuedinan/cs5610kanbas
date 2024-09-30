import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function CoursesNavigation() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>

     


      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 position-fixed d-flex d-none d-md-block">
        <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link" className="list-group-item active border border-0">
          Home
        </Link>
        <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link" className="list-group-item text-danger border border-0">
          Modules
        </Link>
        <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link" className="list-group-item text-danger border border-0">
          Piazza
        </Link>
        <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link" className="list-group-item text-danger border border-0">
          Zoom
        </Link>
        <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link" className="list-group-item text-danger border border-0">
          Assignments
        </Link>
        <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link" className="list-group-item text-danger border border-0">
          Quizzes
        </Link>
        <Link to="/Kanbas/Courses/:cid/People" id="wd-course-people-link" className="list-group-item text-danger border border-0">
          People
        </Link>
      </div>
    </div>
  );
}
