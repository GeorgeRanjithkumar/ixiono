import React from "react";
// import ProfileComponent from "../../../app/Components/User-Profile/UserProfileComponent";
import Notice from "../../../app/Components/Notice/Notice";

const UserProfile = () => {
	return (
		<div>
			{/* <ProfileComponent /> */}
			<div className="row">
	    <div className="col-8">
      {/* <ProfileComponent/> */}
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
			
		</div>
	);
};

export default UserProfile;
