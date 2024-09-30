import React from 'react';
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from './Modules';
import Assignments from './Assignments';
import Home from "./Home";
import AssignmentEditor from './Assignments/Editor';
import PeopleTable from './People/Table';
import { FaAlignJustify } from 'react-icons/fa';


export default function Courses() {
  return (
    <div id="wd-courses">
  <h2 className="text-danger d-flex d-none d-md-block">
      <FaAlignJustify className="me-4 fs-4 mb-1 " />
      Course 1234 </h2> <hr className="d-none d-md-block"/>
  <div className="d-flex">
    <div className="d-md-block flex-fill">

              <CoursesNavigation />

            <div className="wd-main-content-offset p-3">
              
            <Routes>
              <Route path="/"
                     element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments"
                     element={<h3>{<Assignments/>}</h3>} />
              <Route path="Assignments/:aid"
                     element={<h3>{<AssignmentEditor/>}</h3>} />
              <Route path="People" element={<h3>{<PeopleTable/>}</h3>} />
            </Routes>
            </div>
    </div></div>
    </div>
);}

