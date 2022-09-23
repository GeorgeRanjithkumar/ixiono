import React from "react";
import CreateEventComponents from "../../../app/Components/Create-Event/CreateEvent";
import Notice from "../../../app/Components/Notice/Notice";
const CreateEvent=()=>{

  return(
    <div>

      {/* <CreateEventComponents/> */}
      <div className="row">
	    <div className="col-8">
      <CreateEventComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
    </div>
  )
}

export default CreateEvent;