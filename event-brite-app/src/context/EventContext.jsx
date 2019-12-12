import React, { Component } from 'react';
import axios from 'axios';

const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component { 
    state={
        events:[],
    }
    
    token='RCSMA76ZNJ4UCJYWPB3P';
    orderBy='date';

    getEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.keyword}&categories=${search.category}&sort_by=${this.orderBy}&token=${this.token}&locale=en_EN`
        const response= await axios.get(url);
        console.log(response.data);
    }

    render() {
        return (
            <EventContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}
            >   
            {this.props.children}

            </EventContext.Provider>
        );
    }
}

export default EventProvider;