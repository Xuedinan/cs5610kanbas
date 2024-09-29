import React from 'react';
import { Link } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
<nav className="left-menu navbar navbar-expand-md navbar-light ist-group rounded-0 position-fixed">
  <a className="navbar-brand" href="#">Home gae 111111111111</a>
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
);}

    // <div id="wd-kanbas-navigation" style={{ width: 120 }} 
    //      className="list-group rounded-0 position-fixed
    //      bottom-0 top-0 d-md-block bg-black z-2 d-none">
    
    //   <a id="wd-neu-link" target="_blank" 
    //     href="https://www.northeastern.edu/"
    //     className="list-group-item bg-black border-0 text-center">
    //     <img src="/images/neuLogo.png" width="75px" /></a><br />
    //   <Link to="/Kanbas/Account" id="wd-account-link"
    //     className="list-group-item text-center border-0 bg-black text-white">
    //     <FaRegCircleUser className="fs-1 text text-white" /><br />
    //     Account </Link><br />

    //   <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
    //     className="list-group-item text-center border-0
    //                bg-white text-danger">
    //     <AiOutlineDashboard className="fs-1 text-danger" /><br />
    //     Dashboard </Link><br />

    //   <Link to="/Kanbas/Dashboard" id="wd-course-link"
    //     className="list-group-item text-white
    //                bg-black text-center border-0">
    //     <LiaBookSolid className="fs-1 text-danger" /><br />
    //     Courses </Link><br />

    //   <Link to="/Kanbas/Dashboard" id="wd-course-link"
    //     className="list-group-item text-white
    //                bg-black text-center border-0">
    //     <IoCalendarOutline className="fs-1 text-danger" /><br />
    //     Calendar </Link><br />

    //   <Link to="/Kanbas/Dashboard" id="wd-course-link"
    //     className="list-group-item text-white
    //                bg-black text-center border-0">
    //     <FaInbox className="fs-1 text-danger" /><br />
    //     Inbox </Link><br />

    //   <Link to="/Labs" id="wd-labs-link"
    //     className="list-group-item text-white
    //                bg-black text-center border-0">
    //     <IoSettingsOutline className="fs-1 text-danger" /><br />
    //     Labs </Link><br />

    // </div>