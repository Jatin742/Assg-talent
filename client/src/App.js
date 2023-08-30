import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from './Page/Home/Home';
import LoginSignUp from './Page/LoginSignUp/LoginSignUp';
// import NewNav from "./Components/NewNav/NewNav.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/login' element={<LoginSignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
