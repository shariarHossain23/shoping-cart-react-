import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Allproduct from './component/Allproduct/Allproduct';
import Header from "./component/Header/Header";
function App() {
  const [count,setCount] = useState(0)
  const cart = ()=> setCount(count + 1)
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="App">
      <Header count={count}></Header>
      <Allproduct cart = {cart}></Allproduct>
    </div>
  );
}

export default App;
