import Driver from "./Driver";
import PropTypes from "prop-types";

// arrow function
const DriverList = (props) => {
  // The Array.map() method creates a new array from the results of calling a function for every element.
  const driverComponents = props.drivers.map((driver) => {
    return (
      <Driver
        key={driver.id}
        name={driver.name}
        team={driver.team}
        country={driver.country}
        handsome={driver.handsome}
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
