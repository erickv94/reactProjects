import React, { Component } from "react";
import uuid from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EventForm extends Component {
  state = {
    event: {
      event: "",
      host: "",
      date: "",
      hour: "",
      description: ""
    },
    error: {
      event: "",
      host: "",
      date: "",
      hour: "",
      description: ""
    },
    message: ""
  };
  handleChange = event => {
    this.setState({
      event: {
        ...this.state.event,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { event: ev, host, date, hour, description } = this.state.event;
    const errors = {};

    const atLeastSixAlphaNum = /^([a-zA-Z0-9 ]{6,})$/;

    const messageEmpty = "Field required";
    const atLeastSixMessage =
      "It should have at least 6 alphanumeric characters";

    // Empty validations
    errors.event = ev ? "" : messageEmpty;
    errors.host = host ? "" : messageEmpty;
    errors.date = date ? "" : messageEmpty;
    errors.hour = hour ? "" : messageEmpty;
    errors.description = description ? "" : messageEmpty;

    // at least 6 validation
    errors.event = atLeastSixAlphaNum.test(ev) ? "" : atLeastSixMessage;
    errors.host = atLeastSixAlphaNum.test(host) ? "" : atLeastSixMessage;
    errors.description = atLeastSixAlphaNum.test(description)
      ? ""
      : atLeastSixMessage;

    //check if values has atleast one value empty in that case is false
    const isValid =
      Object.values(errors).filter(error => error !== "").length > 0
        ? false
        : true;

    if (isValid) {
      //getting the event from state
      const newEvent = { ...this.state.event };
      //give a new attrib to the new object
      // uuid give us a ramdom and unique id

      newEvent.id = uuid();
      this.props.createEvent(newEvent);
      // 
  
      toast.success(`✅ Event ${newEvent.name} was created, check bellow`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });

    } else {
      this.setState({
        error: {
          ...this.state.error,
          event: errors.event,
          host: errors.host,
          date: errors.date,
          hour: errors.hour,
          description: errors.description
        },
        message: ""
      });

      toast.error(`✖ You have an error`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
    }
  };
  render() {

    return (
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <div className="card mt-5 py-5">
          <div className="card-body">
            <h2 className="card-title text-center mb-5">
              Fill the form for adding a new event
            </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="" className="col-sm4-4 col-lg-2 col-form-label">
                  Event
                </label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className={
                      "form-control " +
                      (this.state.error.event ? "is-invalid" : "")
                    }
                    placeholder="Event title"
                    name="event"
                    onChange={this.handleChange}
                    value={this.state.event.event}
                  />
                  <div className="invalid-feedback">
                    {this.state.error.event}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="" className="col-sm4-4 col-lg-2 col-form-label">
                  Event Host
                </label>
                <div className="col-sm-8 col-lg-10">
                  <input
                    type="text"
                    className={
                      "form-control " +
                      (this.state.error.host ? "is-invalid" : "")
                    }
                    placeholder="Event Host"
                    name="host"
                    onChange={this.handleChange}
                    value={this.state.event.host}
                  />
                  <div className="invalid-feedback">
                    {this.state.error.host}
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="" className="col-sm4-4 col-lg-2 col-form-label">
                  Date
                </label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="date"
                    className={
                      "form-control " +
                      (this.state.error.date ? "is-invalid" : "")
                    }
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.event.date}
                  />
                  <div className="invalid-feedback">
                    {this.state.error.date}
                  </div>
                </div>

                <label htmlFor="" className="col-sm4-4 col-lg-2 col-form-label">
                  At
                </label>
                <div className="col-sm-8 col-lg-4">
                  <input
                    type="time"
                    className={
                      "form-control " +
                      (this.state.error.hour ? "is-invalid" : "")
                    }
                    name="hour"
                    onChange={this.handleChange}
                    value={this.state.event.hour}
                  />
                  <div className="invalid-feedback">
                    {this.state.error.hour}
                  </div>
                </div>
              </div>
              {/* end  date and hour */}
              <div className="form-group row">
                <label htmlFor="" className="col-sm4-4 col-lg-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-8 col-lg-10">
                  <textarea
                    className={
                      "form-control " +
                      (this.state.error.description ? "is-invalid" : "")
                    }
                    placeholder="Event Description"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.event.description}
                  ></textarea>
                  <div className="invalid-feedback">
                    {this.state.error.description}
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="py-3 mt-2 btn btn-success btn-block"
                value="Add a new event"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
