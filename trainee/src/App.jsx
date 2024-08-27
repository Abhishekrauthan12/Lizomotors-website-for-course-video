import './App.css';
import { MdModelTraining } from "react-icons/md";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Banner from './components/Banner';
import Mains from './components/Mains';
import Services from './components/Services';
import Comp from './components/Comp';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Video from './components/Video';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className='header p-5 bg-purple-50 flex justify-between'>
              <h2 className='text-purple-950 flex font-semibold text-2xl'>
                <MdModelTraining style={{ color: ' rgb(59 7 100)', fontSize: '2rem' }} /> Trainee
              </h2>
              <ul className='flex space-x-4 font-medium '>
                <li>Home</li>
                <li onClick={() => navigate('/videos')} className="cursor-pointer">Course</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <Banner />
            <Mains />
            <Services />
            <Comp />
            <Carousel />
            <Footer />
          </>
        }
      />
      <Route path="/videos" element={<Video />} />
    </Routes>
  );
}

export default App;
