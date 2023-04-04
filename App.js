import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const d = new Date();
  let text =  d.toLocaleTimeString()


  let [count, setCount] = useState(text)
  
  const onChange = () =>{
    text = new Date().toLocaleTimeString()
    setCount(text)
    
  }

  setInterval(onChange,1000)
   
  return (
    <div className="bg">
    <div className="bg2">
    <h1> {count}</h1>
    <div className="div1">
    <input type='text' placeholder='search...'/>
    
    </div>
    </div>
   </div>
  );
}

export default App;
