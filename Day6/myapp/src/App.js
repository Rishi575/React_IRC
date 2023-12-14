import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contacts from "./pages/Contacts";

function App() {
  return (
    <div>
     <Nav/><br/>
      <Routes>
        <Route path="" element={<Home/>}/>
        {/* <Route path="" element={<About/>}/>
        <Route path="" element={<Contacts/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
