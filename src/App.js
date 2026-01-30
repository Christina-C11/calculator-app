import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const latestInput = Number(inputRef.current.value);
    setResult((prevResult) => prevResult + latestInput); 
    inputRef.current.value = '';
    inputRef.current.focus();
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    const latestInput = Number(inputRef.current.value);
    setResult((result) => result - latestInput);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
 
  function times(e) { 
    e.preventDefault(); 
    const latestInput = Number(inputRef.current.value);
    setResult((result) => result * latestInput); 
    inputRef.current.value = '';
    inputRef.current.focus();
  };
 
  function divide(e) { 
    e.preventDefault(); 
    const latestInput = Number(inputRef.current.value);
    if(latestInput === 0) {
      alert("Cannot divide by zero!");
      inputRef.current.focus();
      return;
    }
    setResult((result) => result / latestInput);
    inputRef.current.value = '';
    inputRef.current.focus();
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = '';
    inputRef.current.focus();
  };
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {Number.isFinite(result) ? result.toLocaleString() : 'Invalid result'} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
