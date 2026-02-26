import React,{useState}from "react";
function App() {
  const[theme,setTheme]=useState("light");
  const toggleTheme=() =>{
    setTheme(theme ==="light" ?"Dark":"light")
  };
  const containerStyle={
    minHeight:"200vh",
    padding:"50px",
    backgroundColor:theme ==="light" ? "#222":"#fff",
    color:theme ==="Dark" ? "#030303":"#f4eeee"  
  }
 return (
    <div style={containerStyle}>
      <h2>THEME TOGGLE </h2>
      <p>click the button to switch between Light and Dark Mode</p>
      <button onClick={toggleTheme}>
        switch to {theme ==="light" ? "Dark" : "light"}Mode
        </button>
      <div style={{marginTop:"50px"}}>
      <p>Text color also changes according to the selected theme.</p>
      </div>
    </div>
    
  );
}

export default App;
