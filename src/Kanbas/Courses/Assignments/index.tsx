import React from 'react';
import AssignmentControls from './AssignmentControls';
import { BsGripVertical } from 'react-icons/bs';
import AssignmentControlsButtons from './AssignmentControlsButtons';
import LessonControlButtons from './LessonControlButtons';
import { PiNotePencilThin } from 'react-icons/pi';


export default function Modules() {
  return (
    <div>

      <AssignmentControls /><br /><br />
      

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-4 fs-5 border-lightgray">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center"> 
            <div>
              
              <BsGripVertical className="me-2 fs-3" />


      <span className="dropdown d-inline mr-1">
        <button
          id="wd-publish-all-btn"
          className="btn btn-sm btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action 1</a></li>
          <li><a className="dropdown-item" href="#">Action 2</a></li>
        </ul>
      </span>
              
              
              <strong>ASSIGNMENTS</strong>
              
            </div>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill bg-light text-dark border fw-normal fs-5">40% of Total</span>
              <AssignmentControlsButtons />
            </div>
          </div>

          <ul className="wd-lessons list-group rounded-0">

            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilThin className="me-2 fs-3 ms-2 btn-secondary text-success" />
              <div className="flex-grow-1 ms-2">
                <h6 className="mb-1">A1</h6>
                <small className="text-muted"><span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts</small>
              </div>
              <LessonControlButtons    />
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilThin className="me-2 fs-3 ms-2 btn-secondary text-success" />
              <div className="flex-grow-1 ms-2">
                <h6 className="mb-1">A2</h6>
                <small className="text-muted"><span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts</small>
              </div>
              <LessonControlButtons />
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencilThin className="me-2 fs-3 ms-2 btn-secondary text-success" />
              <div className="flex-grow-1 ms-2">
                <h6 className="mb-1">A3</h6>
                <small className="text-muted"><span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts</small>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}



// need to update auto adjust and assignment + align with the design