import React from 'react';
import EventDetailsComponents from "../../../app/Components/Event-Details/EventDetails";
import styles from './styles.module.css';
import Notice from "../../../app/Components/Notice/Notice";
const EventDetails=()=>{

    return(

        <>
            {/* <EventDetailsComponents/> */}
            <div className="row">
	    <div className="col-8">
      <EventDetailsComponents/>
	     </div>

	    <div className="col-4">
		   <Notice/>
	   </div>
    </div>
        </>
    )
}

export default EventDetails;