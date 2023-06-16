import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from './Component/Home/Home';
import Underline from './Component/Under-Line/Line';
import SecondPage from './Component/SecondPage/SecondPage';
import ThirdPage from "./Component/ThirdPage/ThirdPage";
import ForthPage from "./Component/ForthPage/ForthPage";
import SixthPage from "./Component/SixthPage/SixthPage";
import Footer from "./Component/Footer/Footer";



function App() {
  return (
<>
<Navbar/>
<Home/>
<Underline/>
<SecondPage/>
<ThirdPage/>
<ForthPage/>
<Underline/>
<SixthPage/>
<Underline/>
<Footer/>
</>
  );
}

export default App;
