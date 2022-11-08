import "./App.css";
import FAQ from "./components/FAQ";
import Feature from "./components/Feature";
import PricingSec from "./components/PricingSec";
import Services from "./components/Services";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";
import { useLayoutEffect } from 'react'


import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'


function App() {



  const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
  }

  

  return (
    <>
        <BrowserRouter>
          <div className="container-fluid" id="master-container">
          <Wrapper>
            <Routes>
              <Route path="/" element={<MainHeader />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/features" element={<Feature />} />
                <Route path="/pricing" element={<PricingSec />} />
                <Route path="/quesans" element={<FAQ />} />
              </Route>
            </Routes>
            {/* <ScrollRestoration /> */}
            </Wrapper>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
