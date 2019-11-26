import React, { Component } from 'react';
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import  EventList from "./components/EventList";

class App extends Component {

  state = {
    events: []
  }


  componentDidMount(){
    const dataEventS=localStorage.getItem('events')  
    if(dataEventS){
        this.setState(
         { events: JSON.parse(dataEventS)}
        )
      }
  }

  componentDidUpdate(){
      localStorage.setItem('events',JSON.stringify(this.state.events));
  }

  createEvent = data => {
    const events= [...this.state.events,data];
    this.setState({
       events
    });
  }

  deleteEvent= id => {

    const currentEvents = [...this.state.events];
    const events = currentEvents.filter(event=> event.id!==id);
    this.setState({
       events
    })

  }


   
  render() {
return (
      <div>
          <Header title='Event application'/>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <EventForm 
                createEvent={this.createEvent}
              />
              <div className="mt-5 col-md-10 mx-auto">
                <EventList events={this.state.events}
                      deleteEvent={this.deleteEvent}
                />
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default App;
