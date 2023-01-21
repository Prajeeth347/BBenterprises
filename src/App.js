import Home from '../src/component/Home/Home/Home';
import About from './component/About/About/About';
import Services from './component/services/Services/Services'
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
  )
}

export default App

