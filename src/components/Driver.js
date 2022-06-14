import './Driver.css';

function Driver() {

  // javascript object
  const tsunoda = {
    name: "Yuki Tsunoda",
    team: "Alpha Tauri",
    country: "Japan",
    handsome: true,
  };

  return (
  <div>
    {/* <h2>Yuki Tsunoda</h2> */}
    <h2 className="driver__name">{tsunoda.name}</h2>
    <ul>
      <li>Team: {tsunoda.team}</li>
      <li>Country: {tsunoda.country}</li>
      {/* convert it to string to make boolean show up*/}
      <li>Handsome: {tsunoda.handsome.toString()}</li>
      {/* <li>Handsome: {tsunoda.handsome ? "Hella":"Not for me"}</li> */}
    </ul>
  </div>
  );
  
}

export default Driver