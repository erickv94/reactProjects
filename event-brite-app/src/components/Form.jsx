import React, { Component } from "react";
import { CategoriesConsumer } from "../context/CategoriesContext";
import { EventConsumer } from "../context/EventContext";

class Form extends Component {
  state = {
    keyword: "",
    category: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventConsumer>
        {value => {
         console.log(value);
          return (
            <div className="uk-container">
              <form onSubmit={
                  (e)=>{
                      e.preventDefault();
                      value.getEvents(this.state);
                  }
              }>
                <fieldset className="uk-fieldset uk-margin">
                  <legend className="uk-legend uk-text-center">
                    Search your event by keyword or category
                  </legend>
                </fieldset>
                <div className="uk-column-1-3@m uk-margin">
                  <div className="uk-margin" uk-margin="true">
                    <input
                      name="keyword"
                      className="uk-input"
                      type="text"
                      placeholder="Type Keyword"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="uk-margin" uk-margin="true">
                    <select
                      name="category"
                      className="uk-select"
                      onChange={this.handleChange}
                    >
                      <option> -- Select a category -- </option>
                      <CategoriesConsumer>
                        {value => {
                          return value.categories.map(category => (
                            <option
                              key={category.id}
                              value={category.id}
                              data-uk-form-select
                            >
                              {category.name_localized}
                            </option>
                          ));
                        }}
                      </CategoriesConsumer>
                    </select>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Search Events"
                      className="uk-button uk-button-danger"
                    />
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </EventConsumer>
    );
  }
}

export default Form;
