import React from "react";
import NoticeBoardComponents from "../../../app/Components/NoticeBoard/NoticeBoard";
import Notice from "../../../app/Components/Notice/Notice";
const NoticeBoard=()=>{

	return(
		<div>
			{/* <EventListComponents/> */}
			<div className="row">
	    <div className="col-8">
      <NoticeBoardComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
		</div>
	)
}

export default NoticeBoard;