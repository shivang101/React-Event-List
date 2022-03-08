import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      date,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(data);
    resetForm();
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
        <button>Submit</button>
      </form>
    </div>
  );
}
