import { Link } from "react-router-dom";
import React from "react";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="wd-dashboard-course">
          <div className="row row-cols-1 row-cols-md-5 g-4">
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course1.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS1234 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course2.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS2222 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course3.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS3333 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course4.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS4444 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course5.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS5555 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course6.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS6666 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course7.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS7777 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                        to="/Kanbas/Courses/1234/Home">
                    <img src="/images/course3.png" width="100%" height={160}/>
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS8888 React JS
                      </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer
                      </p>
                      <button className="btn btn-primary"> Go </button>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
}
