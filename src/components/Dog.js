import "./Dog.css";

const Dog = () => {
  const name = "Doggo";
  return (
    <div className="dog">
      <h3>{name}</h3>
      <p> woof</p>
    </div>
  );
};

export default Dog;
