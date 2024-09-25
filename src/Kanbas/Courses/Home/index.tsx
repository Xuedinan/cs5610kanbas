import Modules from "../Modules";
import CourseStatus from "./Status";
import React from "react";

export default function Home() {
  return (
<div className="d-flex" id="wd-home">
  <div className="flex-fill flex-grow-1">

          <Modules />
          </div>

  <div className="d-none d-lg-block justify-content-end">
          <CourseStatus />
</div>
</div>
  );
}
