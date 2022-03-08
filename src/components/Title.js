// export default function Title(props) {
//   return (
//     <div>
//       <h1 className="title">{props.title}</h1>
//       <br />
//       <h2 className="subtitle">{props.sub}</h2>
//     </div>
//   );
// }

import "./Title.css";
export default function Title({ title, sub }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{sub}</h2>
    </div>
  );
}
