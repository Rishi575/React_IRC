import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";
import Sport from "./Pages/Sports&outdoor";


function App() {
  return (
    <div>
     <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
       
        <Route path="Login" element={<Login/>} />
        <Route path="Sports&outdoor" element={<Sport/>}/>
      </Routes>
    </div>
  );
}

export default App;
