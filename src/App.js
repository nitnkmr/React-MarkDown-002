import './App.css';
import Markdowninput from './Components/Markdowninput';
import Result from './Components/Result';
import { useState } from 'react';

function App() {
  const [MDinput, setMDinput] = useState("# Markdown Preview")
  return (
    <div className="App">
    <div className='markdown'>
    <Markdowninput MDinput={MDinput} setMDinput={setMDinput} />
      <Result MDinput={MDinput} setMDinput={setMDinput} />
    </div>
      
     
    </div>
  );
}

export default App;
