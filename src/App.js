import { useRef, useState } from "react";
import "./styles.css";
export default function App() {
  const [sec,setSec] = useState(0);
  const [startOrEnd,setStartOrEnd] =useState(true)
  let useId = useRef()
  const handleCounter = (storend) =>
  {
    setStartOrEnd(storend)
    if(startOrEnd)
    {
      var count = sec+1;
      useId.current = setInterval(() => {
          setSec(count++)
        console.log(useId)
        }, 1000)
    }else{
      console.log(useId)
      clearInterval(useId.current)
    }
  }
  const handleRestart = () =>{
    setSec(0)
    setStartOrEnd(true)
    clearInterval(useId.current)
  }
  return (
    <div className="App">
      <h1>{sec} sec</h1>
      <button onClick={()=>handleCounter(!startOrEnd)}>{startOrEnd?"start":"stop"}</button>
      <button onClick={()=>handleRestart()}>reset</button>
    </div>
  );
}
