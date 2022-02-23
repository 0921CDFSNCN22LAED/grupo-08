import home from "./home";
import { Router } from "react-router-dom";
import "../App.css";


function App() {
  return (
    <div>
      <Router path="/" exact={ true } element={ <home/> }/>
    </div>
  );
}
export default App;
