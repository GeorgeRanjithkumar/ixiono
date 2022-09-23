import React from "react";
import UserDashboard from "./UserDashboard";
import "./Groups.css";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

function Groups() {
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <div
            className="card-header text-white"
            style={{ backgroundColor: "#4E6fB7", borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col">
                <div className="container">
                  <div className="circular-progress">
                    <div className="value-container">100%</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <h6 className="text">Commitee information</h6>
                <p>Lorem ipsum dollor sit amet</p>
                <div className="button">
                  <button type="button" class="btn btn-light">
                    Complite Your Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <aside className="Sidebar">
            <nav className="nav">
              <div>
                <Link to="/user/general" className="nav-link">
                  <h5 cluserdashSidebarassName="nav-link-name">General</h5>
                </Link>

                <div className="nav-list">
                  <Link to="/user/manager" className="nav-link">
                    <h5 className="nav-link-name">Managers</h5>
                  </Link>

                  <Link to="/user/Permissions" className="nav-link">
                    <h5 className="nav-link-name">Permissions</h5>
                  </Link>

                  <Link to="/user/Registration" className="nav-link">
                    <h5 className="nav-link-name">Registration</h5>
                  </Link>

                  <Link to="/user/Members" className="nav-link">
                    <h5 className="nav-link-name">Members</h5>
                  </Link>

                  <Link to="/user/Groups" className="nav-link">
                    <h5 className="nav-link-name">Groups</h5>
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </div>
        <div className="col-8">
          <div
            className="card-header"
            style={{ height: "400px", width: "900px" }}
          >
            <div className="tables">
              <div className="row">
                <div className="col-sm-2">Group</div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Created on
                  </div>
                </div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Created by
                  </div>
                </div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Members
                  </div>
                </div>
                <div className="col-sm-2">
                  <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Created on
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">
                <h6>General</h6>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <h6>Tom Cruice</h6>
              </div>
              <div className="col-sm-2">
                <h6>1</h6>
              </div>
              <div className="col-sm-2">
                <h6>May 26,2019</h6>
                <b>6:30PM</b>
              </div>
              <div className="col-sm-2">
                <div className="icon">
                  <div className="trash">
                    <BsTrash />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
