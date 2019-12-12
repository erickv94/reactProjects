import React, { Component } from 'react';
import {EventConsumer} from '../context/EventContext';
class EventList extends Component {
    render() {
        return (
            <div className="uk-child-width-1-3@m" uk-grid="true">
                <h1>
                    results
                </h1>

            </div>
        );
    }
}

export default EventList;