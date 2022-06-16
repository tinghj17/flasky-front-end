import "./Driver.css";
import PropTypes from "prop-types";

const Driver = (props) => {
  return (
    <div>
      {/* <h2>Yuki Tsunoda</h2> */}
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        {/* convert it to string to make boolean show up*/}
        <li>Handsome: {props.handsome.toString()}</li>
        {/* <li>Handsome: {tsunoda.handsome ? "Hella":"Not for me"}</li> */}
      </ul>
    </div>
  );
};

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  handsome: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

// javascript object
// const tsunoda = {
//   name: "Yuki Tsunoda",
//   team: "Alpha Tauri",
//   country: "Japan",
//   handsome: true,
// };

// return (
// <div>
//   {/* <h2>Yuki Tsunoda</h2> */}
//   <h2 className="driver__name">{tsunoda.name}</h2>
//   <ul>
//     <li>Team: {tsunoda.team}</li>
//     <li>Country: {tsunoda.country}</li>
//     {/* convert it to string to make boolean show up*/}
//     <li>Handsome: {tsunoda.handsome.toString()}</li>
//     {/* <li>Handsome: {tsunoda.handsome ? "Hella":"Not for me"}</li> */}
//   </ul>
// </div>
// );

// }

export default Driver;
