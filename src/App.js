// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'

function App() {
  const [mode, setMode]=useState('light')
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = "#1d1a1a";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
  }
}
  return (
    <div>
      <Navbar
        mode={mode}
        title="Text Utilizer"
        aboutText="About us"
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter your text below to analyze" mode={mode} />
      </div>
    </div>
  );
    }
    
export default App;
    
    // <About/>