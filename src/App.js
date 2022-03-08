import React, { useState } from "react";
import Title from "./components/Title";
import "./App.css";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const [event, setEvent] = useState([]);
  const handleClick = (id) => {
    setEvent((prevev) => {
      return prevev.filter((el) => el.id !== id);
    });
  };
  const addEvent = (data) => {
    setEvent((prevState) => [...prevState, data]);
  };
  const displayEvents = () => {
    setShowEvents((prevEvent) => !prevEvent);
  };

  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Events in your Area" sub={subtitle} />
      {/* <Title title="Another Title" sub="Another Subtitle" /> */}
      <div>
        {showEvents && (
          <button onClick={displayEvents}>
            <h4>Hide Events</h4>
          </button>
        )}
      </div>
      <div>
        {!showEvents && (
          <button onClick={displayEvents}>
            <h2>Show Events</h2>
          </button>
        )}
      </div>

      {showEvents && <EventList event={event} click={handleClick} />}
      {/* <Modal>
        <h2>10% off ther code</h2>
        <p>Use the code ninja10 at the checkout</p>
      </Modal> */}

      {showModal && (
        <Modal close={handleClose} isSalesModal={true}>
          <NewEventForm newInput={addEvent} closeModal={handleClose} />
        </Modal>
      )}
      <button onClick={handleClose}>Add New Event</button>
    </div>
  );
}

export default App;
