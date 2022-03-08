import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      date,
      location,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(data);
    resetForm();
    props.newInput(data);
    props.closeModal();
  };

  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="title">Event Title</label>
        <input type="text" id="title" /> */}
        <label>
          <span>Event Title </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span> Event Date</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>
        <label>
          <span>Event Location</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
