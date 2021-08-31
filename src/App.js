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
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = "#1d1a1a";
    showAlert("Dark mode enabled!!","success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode enabled!!","success")
  }
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
          
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
              <TextForm
                heading="Enter your text below to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
    }
    
export default App;
    
 