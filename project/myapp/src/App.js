import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";


function App() {
  return (
    <div>
     <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
       
        <Route path="Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
