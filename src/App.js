import Navbar from './Components/Navbar';
import Header1 from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import Resister1 from './Components/Resister';
import './App.css';
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/about" element={<About title="About us"/>}>
    </Route>
    <Route path="/service" element={<Service title="About us"/>}>
    </Route>
    <Route path="/contact" element={<Resister1 title="Regiter"/>}>
    </Route>
    <Route path="/" element={<Header1 title="Welcome to Student Subject Registration"/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}
export default App;
