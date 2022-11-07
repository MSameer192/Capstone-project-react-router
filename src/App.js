import './App.css';
import About from './components/About';
import DownloadSe from './components/DownloadSe';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Features2 from './components/Features2';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import PricingSec from './components/PricingSec';
import Services from './components/Services';
import Video from './components/Video';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';



function App() {
  return (
    <>
      < BrowserRouter >  
        <div className="container-fluid" id="master-container">
          <Navbar/>
          <Routes>
              <Route path='/' element={<MainSection/>}>
                <Route index element={<Home />} />
                <Route path='/services' element={<Services/>} />
                <Route element={<About/>} />
                <Route path='/features' element={<Feature/>} />
                <Route element={<Video/>} />
                <Route element={ <Features2/>} />
                <Route path='/pricing' element={<PricingSec/>} />
                <Route path='/quesans' element={<FAQ/>} />
                <Route element={<DownloadSe/>} />
              </Route>  
          </Routes>  
          <Footer/>
        </div>  
      </BrowserRouter>  
    </>
  );
}

export default App;
