import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{ useState,useRef } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState("light");
  const[text,setText] = useState('dark');
  const[alert,setAlert] = useState(null);
  const[btn,setBtn] = useState('primary');
  const textclr = useRef(0);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    });
  }
  setTimeout(() => {
    setAlert(null);
  }, 3000);
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} btn={btn} setBtn={setBtn} setMode={setMode} setText={setText} showAlert={showAlert} text={text} textref={textclr} />
    <Alert alert={alert}/>
    <div className="container">
    {/* <TextForm heading="Enter your text here...." mode={mode} btn={btn} setBtn={setBtn} text={text} showAlert={showAlert} textref={textclr}/> */}
    {/* <Routes>
          <Route exact path="/about" element={<About textref={textclr} mode={mode} btn={btn} setBtn={setBtn} text={text} showAlert={showAlert}/>}/> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter your text here...." mode={mode} btn={btn} setBtn={setBtn} text={text} showAlert={showAlert} textref={textclr}/>}/> */}
          <TextForm heading="Enter your text here...." mode={mode} btn={btn} setBtn={setBtn} text={text} showAlert={showAlert} textref={textclr}/>
    {/* </Routes>        */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
