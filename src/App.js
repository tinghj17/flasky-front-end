import "./App.css";
// import Driver from "./components/Driver";
import DriverList from "./components/DriverList";

const drivers = [
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
];

function App() {
  return (
    <div>
      <h1>Drivers</h1>
      {/* like in oop, vender = Vender(driver=3) new instance of driverlist */}
      <DriverList drivers={drivers} />
    </div>
  );
}

export default App;
