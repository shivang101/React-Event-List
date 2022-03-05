import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Shivang");
  const [event, setEvent] = useState([
    { title: "Shivang's birthday party", id: 1 },
    { title: "date with Neha", id: 2 },
    { title: "Movie with friends", id: 3 },
  ]);
  const handleClick = () => {
    setName("Mathur");
    console.log(name);
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>

      {event.map((el, index) => (
        <div key={el.id}>
          <h2>
            {index + 1}) {el.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
