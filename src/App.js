import React,{useState} from 'react';
import './App.css';
import Person from './Components/Person';
import Example from './Components/Example';

function App() {
  const change = () => {
    setPerson([
      {name: "Phạm", age:4},
      {name: "Ngọc", age:5},
      {name: "Long", age:6},
    ])
  };

  const [persons, setPerson] = useState([
    {name: "Phạm", age:1},
    {name: "Ngọc", age:2},
    {name: "Long", age:3},
  ]);

  return (
    <div className="App">
      <h1>ReactJS this is the first</h1>

      <Person name={persons[0].name} age={Math.random} />
      <Person name={persons[1].name} age={Math.random} />
      <Person name={persons[2].name} age={Math.random} />
      <button onClick={() => change()}>change</button>

      <Example/>
    </div>
  );
}

export default App;
