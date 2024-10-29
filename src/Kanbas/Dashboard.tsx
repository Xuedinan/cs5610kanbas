import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer"; // Adjust the path as needed

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer); 
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleEnrollmentClick = () => {
    setShowAllCourses(!showAllCourses);
  };

  const enrolledCourseIDs = new Set(
    enrollments
      .filter((enrollment: any) => enrollment.user === currentUser._id)
      .map((enrollment: any) => enrollment.course)
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>

          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>

          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />

          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
        {currentUser.role === "STUDENT" && (
          <button
            onClick={handleEnrollmentClick}
            className="btn btn-primary fs-5 float-end"
            id="wd-enroll-course-click"
          >
            {showAllCourses ? "All Courses" : "Enrollment"}
          </button>
        )}
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="wd-dashboard-course">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {(!showAllCourses
              ? courses.filter((course) =>
                  enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                )
              : courses
            ).map((course) => (
              <div
                key={course._id}
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <img
                      src="/images/course1.png"
                      width="100%"
                      height={160}
                      alt="Course"
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary">Go</button>

                      {currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}

                      {currentUser.role === "STUDENT" && showAllCourses && (
                        <>
                          {enrolledCourseIDs.has(course._id) ? (
                            <button
                              id="wd-unenroll-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(unenrollCourse({ userId: currentUser._id, courseId: course._id }));
                              }}
                              className="btn btn-danger me-2 float-end"
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              id="wd-enroll-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(enrollCourse({ userId: currentUser._id, courseId: course._id }));
                              }}
                              className="btn btn-success float-end"
                            >
                              Enroll
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
