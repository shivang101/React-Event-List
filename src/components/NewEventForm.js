import { useRef, useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const formRef = useRef(null);

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(formRef.current.location.value);
    // const data = {
    //   title: title,
    //   date,
    //   location,
    //   id: Math.floor(Math.random() * 100000),
    // };
    // console.log(data);
    // resetForm();
    const { title, date, location } = evt.target;
    const data = {
      title: title.value,
      date: date.value,
      location: location.value,
      id: Math.floor(Math.random() * 100000),
    };
    props.newInput(data);
    props.closeModal();
  };

  return (
    <div>
      <form className="new-event-form" ref={formRef} onSubmit={handleSubmit}>
        {/* <label htmlFor="title">Event Title</label>
        <input type="text" id="title" /> */}
        <label>
          <span>Event Title </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
          />
        </label>
        <label>
          <span> Event Date</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
            id="date"
          />
        </label>
        <label>
          <span>Event Location</span>
          <select
            defaultValue={"manchester"}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
          >
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
