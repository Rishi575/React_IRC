import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";
import Sport from "./Pages/Sports&outdoor";
import Users from "./Pages/Users";

import Demo from "./Pages/Demo";


function App() {
  return (
    <div>
      {/* <Demo/> */}
     <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
       
        <Route path="Login" element={<Login/>} />
        <Route path="Sports&outdoor" element={<Sport/>}/>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/Cart" element={<Demo/>}/>
    
      </Routes>
    </div>
  );
}

export default App;
