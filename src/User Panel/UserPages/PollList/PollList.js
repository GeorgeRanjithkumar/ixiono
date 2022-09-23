import React from "react";
import PollListComponents from "../../../app/Components/PollList/PollList";
import Notice from "../../../app/Components/Notice/Notice";
const PollList=()=>{

	return(
		<div>
			{/* <EventListComponents/> */}
			<div className="row">
	    <div className="col-8">
      <PollListComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
		</div>
	)
}

export default PollList;