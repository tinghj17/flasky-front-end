import "./App.css";
// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";
import { useState } from "react";

function App() {
  const [drivers, setDrivers] = useState([
    {
      id: 0,
      name: "Yuki Tsunoda",
      team: "Alpha Tauri",
      country: "Japan",
      handsome: true,
    },
    {
      id: 1,
      name: "Carlos Sainz",
      team: "Ferrari",
      country: "Spain",
      handsome: true,
    },
  ]);

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
    for (const driver of drivers) {
      if (driver.id === id) {
        driver.handsome = !driver.handsome;
      }
    }
    const newDriver = [...drivers];
    setDrivers(newDriver);
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
