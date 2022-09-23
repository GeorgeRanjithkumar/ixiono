import React from "react";
import FeedsComponents from "../../../app/Components/Feeds/Feeds";
import Notice from "../../../app/Components/Notice/Notice";
const Feeds=()=>{

  return(
    <div>
      <div className="row">
	    <div className="col-8">
      <FeedsComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
     
    </div>
  )
}

export default Feeds;