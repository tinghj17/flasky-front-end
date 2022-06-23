import { useState } from "react";

const defaultDriver = {
  name: "",
  country: "",
  team: "",
  handsome: true,
};

const DriverForm = (props) => {
  const [formData, setFormData] = useState(defaultDriver);

  const onFormChange = (event) => {
    // tells us which textbox we are in
    const stateName = event.target.name; 
    // tells us what is inside that textbox
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  //get rid of auto refresh page
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addDriverCallback(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onFormChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={onFormChange}
      />

      <label htmlFor="team">Team</label>
      <input
        type="text"
        name="team"
        value={formData.team}
        onChange={onFormChange}
      />
      <input type="submit" value="Add Driver!"/>
    </form>
  );
};

export default DriverForm;
