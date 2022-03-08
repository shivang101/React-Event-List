import React from "react";
import styles from "./EventList.module.css";
// export default function EventList(props) {
//   return props.event.map((el, index) => {
//     return (
//       <React.Fragment key={el.id}>
//         <h2>
//           {index + 1} {el.title}
//         </h2>
//         <button
//           onClick={() => {
//             props.click(el.id);
//           }}
//         >
//           Delete Event
//         </button>
//       </React.Fragment>
//     );
//   });
// }

// import React from 'react'

export default function EventList({ event, click }) {
  return (
    <div>
      {event.map((el, index) => (
        <div className={styles.card} key={el.id}>
          <h2>
            {index + 1} on <span style={{ color: "red" }}>{el.date} </span>{" "}
            {el.title}
          </h2>
          <p>{el.location}</p>
          <button
            onClick={() => {
              click(el.id);
            }}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
}
