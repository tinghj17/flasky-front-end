import "./App.css";
// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";
import { useEffect, useState } from "react";
import axios from "axios";
import DriverForm from "./components/DriverForm";

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

const flipHandsomeHelper = (id) => {
  return axios
    .patch(`${kBaseUrl}/drivers/${id}/fliphandsome`) //promise 1
    .then((response) => {
      // response is an object
      return response.data;
    }) //promise 2
    .catch((err) => {
      console.log(err);
    }); // promise 3
};

const deleteDriversHelper = (id) => {
  return axios
    .delete(`${kBaseUrl}/drivers/${id}`) //promise 1
    .catch((err) => {
      console.log(err);
    }); // promise 2
};

//////////////////////////////////////////////////////

function App() {
  const [drivers, setDrivers] = useState([]);

  const updateDrivers = () => {
    getDrivers()
      //get drivers from line 14 return response.data
      // chain on callback
      .then((drivers) => {
        setDrivers(drivers);
      });
  };

  // useEffect to get data from api
  useEffect(() => {
    updateDrivers();
  }, []);

  // everytime we call this function, we replace it with a new array
  const flipHandsome = (id) => {
    flipHandsomeHelper(id).then(() => {
      setDrivers((oldData) => {
        const newDrivers = [];
        for (const driver of oldData) {
          const newDriver = { ...driver };
          if (newDriver.id === id) {
            newDriver.handsome = !newDriver.handsome;
          }
          newDrivers.push(newDriver);
        }
        return newDrivers;
      });
    });
  };

  const deleteDriver = (id) => {
    deleteDriversHelper(id).then(
      setDrivers((oldData) => {
        const newDrivers = [];
        for (const driver of oldData) {
          if (driver.id !== id) {
            newDrivers.push(driver);
          }
        }
        return newDrivers;
      })
    );
  };

  const addDriver = (driverInfo) => {
    axios
      .post(`${kBaseUrl}/drivers`, driverInfo)
      .then((response) => {
        console.log(response);
        updateDrivers();
      })
      .catch((error) => {
        console.log(error);
      });
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
      <DriverForm addDriverCallback={addDriver}></DriverForm>
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
