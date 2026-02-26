import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[num1,setnum1]=useState("");
  const[num2,setnum2]=useState("");
  const a=Number(num1)
  const b=Number(num2)  
  return (
    <>
      <div>
        <h1>Real time Calculator</h1>
        <input type="number"placeholder='Enter the value1'value={num1} onChange={(e)=>setnum1(e.target.value)}style={{marginRight:"15px"}}/>
    <input type="number" placeholder='Enter the value2' value={num2} onChange={(e)=>setnum2(e.target.value)} style={{marginRight:"15px"}}/>

        <div style={{height:"200px",
        width:"250px",
        border:"1px solid",
        marginLeft:"150px",
        marginTop:"20px",
        backgroundColor:' #7074b8',
        borderRadius:"14px solid"}}>
        
        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>Subraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Division:</strong>{b==0? "cant divide by zero" :a/b}</p>
      </div>

        
      </div>
     
      
      
    </>
  )
}

export default App
