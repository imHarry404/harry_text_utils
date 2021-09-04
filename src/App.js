import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// importing react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-secondary")
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
  }
  const toggleMode=(cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
  if(mode===cls){
    setMode('dark')
    // document.body.style.backgroundColor = "#1d1a1a";
  }
  else{
    setMode('dark')
    // document.body.style.backgroundColor='white'
  }
  showAlert(`${cls} mode enabled!!`,"success")
}
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          title="Harry Text Fun"
          aboutText="About Me"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter your text below to analyze"
                mode={mode}
                showAlert={showAlert}
                toggleMode={toggleMode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
    }
    
export default App;
    
 