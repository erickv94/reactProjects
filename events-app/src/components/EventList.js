import React from 'react';
import Event from "./Event";
const EventList = ({events,deleteEvent}) => {

    const message = Object.keys(events).length===0 ? "No events":"Events"
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                   <h2 className="card-title text-center"> 
                   {message}
                   </h2> 
                   <div className="lista-citas">
                       {events.map( event=>(
                           <Event 
                                key={event.id}
                                event={event}
                                deleteEvent={deleteEvent}
                           />
                       ))}
                   </div>
            </div>    
        </div>
    );
};

export default EventList;