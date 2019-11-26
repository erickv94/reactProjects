import React from 'react';

const Event = ({event,deleteEvent}) => {
    return (
        <div className="median mt-3">
            <div className="media-body">

                <h3 className="mt-0">
                   {event.event} 
                </h3>
                <p className="card-text"><span>Host: </span>{event.host}</p>
                <p className="card-text"><span>Date: </span>{event.date}</p>
                <p className="card-text"><span>At: </span>{event.hour}</p>
                <p className="card-text"><span>Description: </span>{event.description}</p>
                
                <button 
                    className="btn btn-danger"
                    onClick={()=> deleteEvent(event.id)}>
                Delete &times;
                </button>
            </div>
        </div>
    );
};

export default Event;