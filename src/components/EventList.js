import React from "react";

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
        <React.Fragment key={el.id}>
          <h2>
            {index + 1} {el.title}
          </h2>
          <button
            onClick={() => {
              click(el.id);
            }}
          >
            Delete Event
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
