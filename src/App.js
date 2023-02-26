import './App.css';
import Markdowninput from './Component/Markdowninput';
import Result from './Component/Result';
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