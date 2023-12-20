import Dash from "./components/dashboard";
import {Routes , Route} from 'react-router-dom'

import Users from './pages/Users'
import AddUsers from './pages/AddUsers'
import EditUsers from './pages/EditUsers'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/add" element={<AddUsers/>}></Route>
      <Route path="/edit/:id" element={<EditUsers/>}></Route>
    </Routes>
    </>
  );
}

export default App;
