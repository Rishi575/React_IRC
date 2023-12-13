import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Nav/>
      
      {/* <Routes>
        <Route exact path="/Home" element={<Home />}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;
