import React from "react";
import EventListComponents from "../../../app/Components/Event-List/EventList";
import Notice from "../../../app/Components/Notice/Notice";
const EventList=()=>{

	return(
		<div>
			{/* <EventListComponents/> */}
			<div className="row">
	    <div className="col-8">
      <EventListComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
		</div>
	)
}

export default EventList;