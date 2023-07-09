import React, {useState} from 'react'
// import Navbar from './Navbar';

export default function TextForm(props) {
    const[text,setText] = useState("Enter text here..");

    // const textclr = useRef(0);

    let onHandleUpChange = () =>{
        // console.log("UPPER CASE CLICKED!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    
    let onHandleLoChange = () =>{
        // console.log("UPPER CASE CLICKED!!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    let onHandleColorRed = () =>{
        props.textref.current.style.color="red";
        props.showAlert("Color Changed","success");
    }
    
    let onHandleColor = () =>{
        props.textref.current.style.color="black";
        props.showAlert("Color Changed","success");
    }

    let onHandleColorGreen = () =>{
        props.textref.current.style.color="green";
        props.showAlert("Color Changed","success");
    }

    let onHandleColorYellow = () =>{
        props.textref.current.style.color="goldenrod";
        props.showAlert("Color Changed","success");
    }

    let onChangeHandler = (event) =>{
        setText(event.target.value);
    }
    
    let arr = text.split(" ");
    let l = arr.length;
    let wrds=0;
    let i =0;
    for(i=0;i<l;i++){
        if(arr[i] !== ""){
            wrds++;
        }
    }
    
    let ccr = text.replace(/\s/g, "");
    let chrct = ccr.length;
    
    return (
        <>
    <div className="container my-4">
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>{props.heading}</label>
        <textarea className="form-control" value={text} ref={props.textref} onChange={onChangeHandler} id="myBox" rows="5" ></textarea>
    </div>
    <button disabled={text.length===0} className={` btn btn-${props.btn}`} onClick={onHandleUpChange}>Convert to Uppercase</button>
    <button disabled={text.length===0} className={` btn btn-${props.btn} mx-2`} onClick={onHandleLoChange}>Convert to Lowercase</button>

    <div className="btn-group">
    <button disabled={text.length===0} type="button" className={` btn btn-${props.btn}`}>Color Change</button>
    <button disabled={text.length===0} type="button" className={`btn btn-${props.btn} dropdown-toggle dropdown-toggle-split`} data-bs-toggle="dropdown" aria-expanded="false">
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/" onClick={onHandleColor}>Default</a></li>
        <li><a className="dropdown-item bg-danger" href="/" onClick={onHandleColorRed}>Red</a></li>
        <li><a className="dropdown-item bg-success" href="/" onClick={onHandleColorGreen}>Green</a></li>
        <li><a className="dropdown-item bg-warning" href="/" onClick={onHandleColorYellow}>Yellow</a></li>
    </ul>
    </div>
    
    </div>
    <div className="container">
        <h1 className='my-3'style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>DETAILS--</h1>
        <p style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>Words-- {wrds}</p><br></br>
        <p style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>Characters-- {chrct}</p>
        <p style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>Time Required to Read = {.008 * wrds} Minutes</p>
        <h2 style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>PREVIEW</h2>
        <p style={{color: props.mode === 'dark' ? 'white' : '#212540'}}>{text}</p>
    </div>
    </>
  )
}
