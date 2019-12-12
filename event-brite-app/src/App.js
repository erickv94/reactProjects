import React from "react";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";
import Form from "./components/Form";
import EventList from "./components/EventList";
import EventProvider from "./context/EventContext";

function App() {
  return (
    <EventProvider>
      <CategoriesProvider>
        <Header />
        <Form />
        <EventList />
      </CategoriesProvider>
    </EventProvider>
  );
}

export default App;
