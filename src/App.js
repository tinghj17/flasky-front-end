import "./App.css";
// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";
import { useEffect, useState } from "react";
import axios from "axios";

const kBaseUrl = "http://127.0.0.1:5000";

const getDrivers = () => {
  return axios
    .get(`${kBaseUrl}/drivers`) //promise 1
    .then((response) => {
      // response is a list of object
      return response.data;
    }) //promise 2
    .catch((err) => {
      console.log(err);
    }); // promise 3
};
function App() {
  const [drivers, setDrivers] = useState([]);

  const updateDrivers = () => {
    getDrivers()
    .then(drivers => {
      setDrivers(drivers);
    });
  };

  // useEffect to get data from api
  useEffect(() => {
    updateDrivers();
  }, []);

  // everytime we call this function, we replace it with a new array
  const flipHandsome = (id) => {
    // const newDrivers = [];
    // // create a copy with new changes
    // for (const driver of drivers) {
    //   if (driver.id === id) {
    //     driver.handsome = !driver.handsome;
    //   }
    //   newDrivers.push(driver);
    // }
    // setDrivers(newDrivers);
    const newDrivers = [];
    for (const driver of drivers) {
      const newDriver = { ...driver };
      if (newDriver.id === id) {
        newDriver.handsome = !newDriver.handsome;
      }
      newDrivers.push(newDriver);
    }
    setDrivers(newDrivers);
  };

  const deleteDriver = (id) => {
    const newDrivers = [];
    for (const driver of drivers) {
      if (driver.id !== id) {
        newDrivers.push(driver);
      }
    }
    setDrivers(newDrivers);
  };

  return (
    <div>
      <h1>Drivers</h1>
      {/* like in oop, vender = Vender(driver=3) new instance of driverlist */}
      <DriverList
        drivers={drivers}
        handsomeCallback={flipHandsome}
        deleteCallback={deleteDriver}
      />
    </div>
  );
}

export default App;

// [
//   {
//     id: 0,
//     name: "Yuki Tsunoda",
//     team: "Alpha Tauri",
//     country: "Japan",
//     handsome: true,
//   },
//   {
//     id: 1,
//     name: "Carlos Sainz",
//     team: "Ferrari",
//     country: "Spain",
//     handsome: true,
//   },
// ]
