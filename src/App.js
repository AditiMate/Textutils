import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  //Color palatte
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = (cls) => {
    //removeBodyClasses(); 
    //console.log(cls);
   //document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
     // document.title = "TextUtils - Dark Mode";     

   // Flash for that the Apps is amazing etc.
      //   setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      //   },2000);
      //   setInterval(() => {
      //   document.title = "Install TextUtils Now";
      //   },1500);

    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
     // document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About us" /> */}
      {/* <Navbar />    */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* /users ---> Component 1
              /users/home ---> Component 2 */ }
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>} >
              {/* <About /> */}
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert}
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
