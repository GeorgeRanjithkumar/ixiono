import React from "react";
import CreatePollComponents from "../../../app/Components/createpoll/createpoll";
import Notice from "../../../app/Components/Notice/Notice";
const createpoll=()=>{

	return(
		<div>
			{/* <EventListComponents/> */}
			<div className="row">
	    <div className="col-8">
      <CreatePollComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
		</div>
	)
}

export default createpoll;