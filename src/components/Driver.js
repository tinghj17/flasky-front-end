import "./Driver.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Driver = (props) => {
  // const [handsome, setHandsome] = useState(props.handsome);
  // const [country, setCountry] = useState(props.country);

  // callback
  // const flipHandsomeness = () => {
  //   if (handsome) {
  //     // handsome = flase; not working
  //     setHandsome(false);
  //   } else {
  //     setHandsome(true);
  //   }
  // };

  // const changeCountryName = (event) => {
  //   setCountry(event.target.value)
  // }

  // I have access to props.handsomeCallback here
  const flipMyHandsome = () => {
    props.handsomeCallback(props.id);
  };

  const deleteMe = () => {
    props.deleteCallback(props.id);
  };
  return (
    <div>
      {/* <h2>Yuki Tsunoda</h2> */}
      <h2 className="driver__name">{props.name}</h2>
      <ul>
        <li>Team: {props.team}</li>
        <li>Country: {props.country}</li>
        {/* convert it to string to make boolean show up*/}
        {/* handsome is a state var, not props.handsome*/}
        {/* <li>Handsome: {handsome.toString()}</li> */}
        <li>Handsome: {props.handsome ? "Hella" : "Not for me"}</li>
        {/* do not add () at the end of flipHandsomeness */}

        <button onClick={flipMyHandsome}>Change Handsomeness</button>
        <button onClick={deleteMe}>Delete</button>
        {/* Set Country */}
        {/* <input type="text" value={country} onChange={changeCountryName}></input> */}
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
