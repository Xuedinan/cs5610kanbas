import { Link } from "react-router-dom";
import React from "react";



export default function CoursesNavigation() {
  return (
<div className="right-menu">    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">2222222</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
</div>
);}



    // <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 position-fixed d-flex d-none d-sm-block navbar navbar-expand-lg navbar-light bg-light">
    //   <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
    //     className="list-group-item active border border-0"> Home </Link>
    //   <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
    //     className="list-group-item text-danger border border-0"> Modules </Link>
    //   <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
    //     className="list-group-item text-danger border border-0"> Piazza </Link>
    //   <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
    //     className="list-group-item text-danger border border-0"> Zoom </Link>
    //   <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
    //     className="list-group-item text-danger border border-0"> Assignments </Link>
    //   <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
    //     className="list-group-item text-danger border border-0"> Quizzes </Link>
    //   <Link to="/Kanbas/Courses/:cid/People" id="wd-course-people-link"
    //     className="list-group-item text-danger border border-0" > People </Link>
    // </div>