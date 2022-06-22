import Driver from "./Driver";
import PropTypes from "prop-types";

// arrow function
const DriverList = (props) => {
  // The Array.map() method creates a new array from the results of calling a function for every element.
 
  const driverComponents = props.drivers.map((driver) => {
    return (
      <Driver
      // key is for react to figure out which component is which 
        key={driver.id} 
        id={driver.id}
        name={driver.name}
        team={driver.team}
        country={driver.country}
        handsome={driver.handsome}
         // i can access props.handsomeCallback here, but i just want to pass it down to driver.js 
        handsomeCallback={props.handsomeCallback}
        deleteCallback={props.deleteCallback}

      />
    );
  });
  return (
    <div>
      {driverComponents}
    </div>
  );
};

DriverList.propTypes = {
  driver: PropTypes.array.isRequired,
};

export default DriverList;
