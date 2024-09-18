import React from 'react';
import './Editor.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" style={{ fontWeight: 'bold' }}>Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of test
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="middle">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
         <tr>
            <td align="right" valign="middle">
              <label htmlFor="wb-group">Assignment Group</label>
            </td>
            <td>
              <select id="wb-group">
                <option value="option1">ASSIGNMENTS</option>
                <option value="option2">Option 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="middle">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="option1">Percentage</option>
                <option value="option2">Option 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="middle">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="option1">Online</option>
                <option value="option2">Option 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="right" valign="top">
              <label htmlFor="wd-checkbox">Online Entry Options</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label>
                <input
                  type="checkbox"
                  id="wd-text-entry"
                />
                Text Entry
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-website-url"
                />
                Website URL
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                />
                Media Recordings
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                />
                Student Annotation
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-file-upload"
                />
                File Uploads
              </label>
            </td>
          </tr>
        <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            </td>
        </tr>
        <tr>
            <td></td> 
            <td align="left"> 
            <input id="wd-assign-to" value="Everyone" />
            </td>
        </tr>
       <tr>
            <td></td>            
            <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
            </td>
        </tr>
        <tr> 
            <td></td>            
            <td align="left" valign="top">
            <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
        </tr>

        <tr>
            <td></td>            
            <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left" valign="top">
            <label htmlFor="wd-available-util">Until</label>
            </td>
        </tr>
        <tr>
            <td></td>            
            <td align="left" valign="top">
            <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
            <td align="left" valign="top">
            <input type="date" id="wd-available-util" value="2024-05-20" />
            </td>
        </tr>
        <tr>
            <td colSpan={3}> <hr id = "wd-underline"/> </td>
        </tr>
        <tr>
            <td colSpan={3} align="right" valign="top">
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </td>
        </tr>
      </table>
    </div>
);}

