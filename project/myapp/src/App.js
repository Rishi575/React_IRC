import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";
import Sport from "./Pages/Sports&outdoor";
import Users from "./Pages/Users";


function App() {
  return (
    <div>
     <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
       
        <Route path="Login" element={<Login/>} />
        <Route path="Sports&outdoor" element={<Sport/>}/>
        <Route path="/users" element={<Users/>}></Route>
      {/* <Route path="/add" element={<AddUsers/>}></Route>
      <Route path="/edit/:id" element={<EditUsers/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
