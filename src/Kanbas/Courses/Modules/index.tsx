import React, { useState } from 'react';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

export default function Modules() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      {/* 顶部导航 */}
      <div
        style={{ height: "60px" }}
        className="navbar-container bg-black text-white d-flex justify-content-between align-items-center p-3 position-fixed w-100 top-0 left-0 d-md-none"
      >
        <h5 className="m-0 flex-grow-1 d-flex justify-content-center">CS5200 2024 Fall Course 1234</h5>
        <nav className="left-menu navbar navbar-expand-md navbar-dark list-group rounded-0 position-fixed d-md-none">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon">
</span>
          </button>
        </nav>
      </div>

      {/* 菜单展开时，显示全屏覆盖的导航 */}
      {isMenuVisible && (
        <div
          id="wd-kanbas-navigation"
          className="list-group position-fixed top-0 bottom-0 start-0 end-0 bg-white z-3"
          style={{ width: "100%", height: "100%", overflowY: "auto" }}
        >
          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={toggleMenu}
          ></button>

          <div className="p-4 z-10">
            <h2 className="mb-4 text-danger">CANVAS</h2>
            <Link to="/Kanbas/Dashboard" className="list-group-item border-0 text-danger">
              <AiOutlineDashboard className="fs-3 me-2" /> Dashboard
            </Link>
            <Link to="/Kanbas/Account" className="list-group-item border-0 text-danger">
              <FaRegCircleUser className="fs-3 me-2" /> Account
            </Link>
            <Link to="/Kanbas/Courses" className="list-group-item border-0 text-danger">
              <LiaBookSolid className="fs-3 me-2" /> Courses
            </Link>
            <Link to="/Kanbas/Calendar" className="list-group-item border-0 text-danger">
              <IoCalendarOutline className="fs-3 me-2" /> Calendar
            </Link>
            <Link to="/Kanbas/Inbox" className="list-group-item border-0 text-danger">
              <FaInbox className="fs-3 me-2" /> Inbox
            </Link>
            <Link to="/Labs" className="list-group-item border-0 text-danger">
              <IoSettingsOutline className="fs-3 me-2" /> Labs
            </Link>
          </div>
        </div>
      )}

      <div>
        <nav className="right-menu navbar navbar-expand-md navbar-dark list-group rounded-0 position-fixed d-md-none">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><IoIosArrowDown /></span>
          </button>
        </nav>
      </div>



      {/* 模块部分 */}
      <div>
        <ModulesControls /><br /><br /><br /><br />
        
        <ul id="wd-modules" className="list-group rounded-0 d-flex flex-grow d-md-block d-lg-block">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              Week 1 
              <ModuleControlButtons />
            </div>
            
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <LessonControlButtons /> 
              </li>
            </ul>
          </li>

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              Week 2 
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1 
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1"> 
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <LessonControlButtons /> 
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}



      {/* <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interface</li>
              </ul>
            </li>
          </ul>
        <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interface with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interface with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
                <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul> */}

      {/* Implement Collapse All button, View Progress button, etc. */}
        {/* <div className="button-container">
        <button className='wb-collapse'>Collapse All</button>
        <button className='wb-progress'>View Progress</button>
        <select id="wb-options">
            <option value="Publish All">Publish All</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
        <button className='wb-add-module'>+ Module</button>
        </div> */}



