import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebDevHome from './WebDevHome';
import WebDevNavbar from './WebDevNavbar';
import WebDevAbout from './WebDevAbout';
import WebDevError from './WebDevError';
import Footer from './Footer';




function WebDev() {




  return (
    <div className="App">





      <WebDevNavbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<WebDevHome />} />
          <Route path="about" element={<WebDevAbout />} />
          <Route path="*" element={<WebDevError />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default WebDev;
