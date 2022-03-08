import { useRef, useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm(props) {
  const title = useRef();
  const date = useRef();

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);

    const data = {
      title: title.current.value,
      date: date.current.value,
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
          <input type="text" ref={title} />
        </label>
        <label>
          <span> Event Date</span>
          <input type="date" required ref={date} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
