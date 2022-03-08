import React, { useState } from "react";
import Title from "./components/Title";
import "./App.css";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const [event, setEvent] = useState([
    { title: "Shivang's birthday party", id: 1 },
    { title: "date with Neha", id: 2 },
    { title: "Movie with friends", id: 3 },
  ]);
  const handleClick = (id) => {
    // setEvent(
    //   event.filter((el) => {
    //     return el.id !== id;
    //   })
    // );
    setEvent((prevev) => {
      return prevev.filter((el) => el.id !== id);
    });
    console.log(`${id} was removed`);
  };
  const displayEvents = () => {
    setShowEvents((prevEvent) => !prevEvent);
  };

  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Events in your Area" sub={subtitle} />
      <Title title="Another Title" sub="Another Subtitle" />
      <div>
        {showEvents && (
          <button onClick={displayEvents}>
            <h2>Hide Events</h2>
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
        <Modal close={handleClose} isSalesModal={false}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
            nam et reprehenderit quibusdam temporibus officia dolorum quo sint
            nemo quis, laborum, quasi nisi fugit praesentium debitis
            repudiandae! Sapiente, omnis.
          </p>
          <a href="#">find out more...</a>
        </Modal>
      )}
      <button onClick={handleClose}>Show Modal</button>
    </div>
  );
}

export default App;
