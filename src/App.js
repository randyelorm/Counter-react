import logo from './logo.svg';
import './App.css';
import ClassCounter from "./Components/classcounter/ClassCounter"
import FunctionCounter from "./Components/functioncompo/FunctionCounter"

function App() {
  return (
    <div className="App">
     <ClassCounter/>
     <br/>
     <hr/>
     <FunctionCounter/>
    </div>
  );
}

export default App;
