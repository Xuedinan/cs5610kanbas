import React from 'react';
import './AssignmentEditor.css';

export default function AssignmentEditor() {
  return (
    <div className="container mt-2" id="wd-assignments-editor">
      <div className="wd-main-content-offset p-3">

        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
          <input id="wd-name" defaultValue="A1" className="form-control"/>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
          <textarea id="wd-description" className="form-control" rows={5} defaultValue="The assignment is available online Submit a link to the landing page of test" />
        </div>

        {/* Points and Assignment Group */}
        <div className="row mb-3 justify-content-end align-items-center">
          <div className="col-md-4 d-flex align-items-end">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-md-8">
            <input id="wd-points" defaultValue={100} className="form-control"/>
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3 justify-content-end align-items-center">
          <div className="col-md-4">
            <label htmlFor="wb-group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-md-8">
            <select id="wb-group justify-content-end" className="form-select">
              <option value="option1">ASSIGNMENTS</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3 justify-content-end align-items-center">
          <div className="col-md-4">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          </div>
          <div className="col-md-8">
            <select id="wd-display-grade-as" className="form-select">
              <option value="option1">Percentage</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>









        {/* Submission Type Section */}
        <div className="row mb-3 justify-content-end">
          <div className="col-md-4 d-flex align-items-start">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          </div>

          <div className="col-md-8">
            <div className="card p-3">
              <div className="row mb-3">
                <div className="col-md-12">
                  <select id="wd-submission-type" className="form-select">
                    <option value="option1">Online</option>
                    <option value="option2">Option 2</option>
                  </select>
                </div>
              </div>

              {/* Online Entry Options */}
              <div className="mb-3">
                <label className="form-label fw-bold">Online Entry Options</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                  <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>


{/* Assign Section */}
        <div className="row mb-3 justify-content-end">

          <div className="col-md-2 d-flex align-items-start">
            <label htmlFor="wd-assign-to" className="form-label">Assign</label>
          </div>

          <div className="col-md-10">
            <div className="card p-3">
              <div className="row mb-3">
                <div className="col-md-12">
<label htmlFor="wd-assign-to" className="form-label">Assign to</label>
<div className="input-group">
  <div className="form-control d-flex align-items-center">
    <span className="badge bg-light text-dark">Everyone
          <button type="button" className="btn-close ms-2" aria-label="Remove"></button>
    </span>

  </div>
</div>

                </div>
              </div>

              {/* Due Date */}
              <div className="row mb-3">
                <div className="col-md-12">
                  <label htmlFor="wd-due-date" className="form-label">Due</label>
                  <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
                </div>
              </div>

              {/* Available from / Until */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="wd-available-from" className="form-label">Available from</label>
                  <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
                  <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
              <hr className="mt-5"/>


        {/* Buttons */}
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-secondary me-2" type="button">Cancel</button>
          <button className="btn btn-danger" type="submit">Save</button>
        </div>
      </div>
      
    </div>
  );
}

