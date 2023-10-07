import Navbar from './Components/Navbar';
import Header1 from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import Resister1 from './Components/Resister';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Login from './Components/Login';
function App() {
  return (
   
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/about" element={<About title="About us"/>}>
    </Route>
    <Route path="/service" element={<Service title="About us"/>}>
    </Route>
    <Route path="/contact" element={<Login title="Regiter"/>}>
    </Route>
    <Route path="/signup" element={<Signup title="Regiter"/>}>
    </Route>
    <Route path="/login" element={<Login title="Regiter"/>}>
    </Route>
    <Route path="/" element={<Header1 title="Welcome to Student Subject Registration"/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}
export default App;
