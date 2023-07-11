import logo from './logo.svg';
import './App.css';

function App() {

function handleNameChange() {
 
  const names = ["Earn","Grow","Give"]
  const int = Math.floor(Math.random()*3)
  return names[int]
}


  return (
    <div>
          Learn React
          <p>Lets {handleNameChange()} Money</p>
    </div>
  );
}

export default App;
