// import React from "react";
// import { Link } from "react-router-dom";
// import SidebarUserdashboard from "../../UserPages/UserDashboard/UserDashboard";
// const General = () => {
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-4" >
//           <SidebarUserdashboard />
//         </div>
//         <div className="col-6">
//           <div
//             className="card-header"
//             style={{ height: "400px", width: "900px" }}
//           >
//             <form>
//               <div className="mb-3 mt-3">
//                 <label for="email" className="form-label">
//                   Name Of Community
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="text"
//                   placeholder="Ixiono"
//                   name="email"
//                 />
//                 <br />
//                 <div className="face">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="30"
//                     height="30"
//                     fill="currentColor"
//                     class="bi bi-person-plus-fill"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
//                     <path
//                       fill-rule="evenodd"
//                       d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
//                     />
//                   </svg>
//                   <b className="title">ADD COMMITEE LOGO</b>
//                 </div>
//                 <label for="comment">Description</label>
//                 <textarea
//                   class="form-control"
//                   rows="5"
//                   id="comment"
//                   name="text"
//                   placeholder="Type Here....."
//                 ></textarea>
//                 <br />
//                 <div className="footer-button">
//                   <span>
//                     DELETE COMMUNITY&nbsp;&nbsp;
//                     <button type="button" className="btn btn-primary btn-lg">
//                       SAVE CHANGES
//                     </button>
//                   </span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default General;
import React from 'react';
import './userDashboard.css';
import { Link } from "react-router-dom";

// import { BsTrash } from 'react-icons/bs';
// import { IoMdArrowDropright } from 'react-icons/io';

function UserDashboard() {
  return (
    <>
    
      <div className='row'>
         <div className="col-md-3">
 			   <div className="card-header text-white" style={{backgroundColor:"#4E6fB7",borderRadius: "10px"}}>
            <div className='row'>
              <div className='col'>
                <div className='container'>
                 <div className='circular-progress'>
                   <div className='value-container'>
                    100%
                   </div>
                 </div>
                 </div>
              </div>
              <div className='col'>
              <h6 className='text'>
              Commitee information
              </h6>
              <p>Lorem ipsum dollor sit amet</p>
              <div className='button'>
              <button type="button" class="btn btn-light">Complite Your Profile</button>
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
             <div className="card-header" style={{height: "400px",width: "900px"}}>
             <form>
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">Name Of Community</label>
                     <input type="text" className="form-control" id="text" placeholder="Ixiono" name="email"/>
                      <br/>
                      <div className='face'>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="30" height="30" fill="currentColor" 
                      class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                      <b className='title'>ADD COMMITEE LOGO</b>
                      </div>
                     <label for="comment">Description</label>
                     <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Type Here....."></textarea>
                     <br/>
                     <div className='footer-button'>
                     <span>DELETE COMMUNITY&nbsp;&nbsp;
                     <button type="button" className="btn btn-primary btn-lg">SAVE CHANGES</button>
                     </span>
                     </div>
                </div>
             </form>
 
             </div>
           </div>
      </div>  
    </>
    )
}

export default UserDashboard



