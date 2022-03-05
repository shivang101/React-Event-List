import { useState } from "react";
import "./App.css";

function App() {
  const [event, setEvent] = useState([
    { title: "Shivang's birthday party", id: 1 },
    { title: "date with Neha", id: 2 },
    { title: "Movie with friends", id: 3 },
  ]);
  const handleClick = (id) => {
    setEvent(
      event.filter((el) => {
        return el.id !== id;
      })
    );
  };

  return (
    <div className="App">
      {event.map((el, index) => (
        <div key={el.id}>
          <h2>
            {index + 1}) {el.title}
          </h2>
          <button
            onClick={() => {
              handleClick(el.id);
            }}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
