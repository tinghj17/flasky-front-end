import "./App.css";
import Dog from "./components/Dog";
import DogList from "./components/DogList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList />
          <Dog />
          <Dog />
          <Dog />
        </div>
      </main>
    </div>
  );
};

export default App;
