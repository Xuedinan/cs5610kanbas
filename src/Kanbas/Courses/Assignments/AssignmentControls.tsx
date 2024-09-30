import { FaPlus } from "react-icons/fa";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex align-items-center">

      <div className="input-group me-3" style={{ maxWidth: "250px" }}>
        <span className="input-group-text bg-white border-right-white float-end" id="search-addon">
          <IoIosSearch />
        </span>
        <input
          type="text"
          className="form-control border-left-white btn-lg"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>

      <button id="wd-add-group-btn" className="btn btn-light btn-lg me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

    </div>
  );
}
