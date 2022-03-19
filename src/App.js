import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css';
import Allproduct from './component/Allproduct/Allproduct';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="App">
      <Allproduct></Allproduct>
    </div>
  );
}

export default App;
