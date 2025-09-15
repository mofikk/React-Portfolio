import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Playground from './Playground';
import MadQueBbq from './MadQueBbq';
import Tower from './Tower';
import Keelan from './Keelan';
import Green from './Green';
import Anwu from './Anwu';  
import Banner from './Banner';
import Error from './Error';
import ProjectPage from './ProjectPage';


function App() {
  return (


  

      
      
      <div className="App">

          <Navbar />

        <div className="content">

          <Routes>
             <Route path="/" element={<Home />} /> 
             <Route path="/about" element={ <About />} />
             <Route path='/playground' element={<Playground />} />
             <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/mad-que-bbq" element={<MadQueBbq />} />
              <Route path="/tower" element={<Tower />} />
              <Route path="/keelan" element={<Keelan />} />
              <Route path="/green" element={<Green />} />
              <Route path="/anwu" element={<Anwu />} /> 
              <Route path="/banner" element={<Banner />} />
              <Route path="*" element={<Error />} />
          </Routes>
                  
        </div>


        < Footer />


      </div>  
      
  
  


  );
}

export default App;
