import Driver from "./Driver";
import PropTypes from "prop-types";

// arrow function
const DriverList = (props) => {
  const driverComponents = props.drivers.map((driver) => {
    return (
      <Driver
        id={driver.id}
        name={driver.name}
        team={driver.team}
        country={driver.country}
        handsome={driver.handsome}
      />
    );
  });
  return (
    <div>
      <h1>Drivers</h1>
      {driverComponents}
    </div>
  );
};

DriverList.propTypes = {
  driver: PropTypes.array.isRequired,
};

export default DriverList;
