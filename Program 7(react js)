import React, { useEffect, useState } from "react";

function App(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json()) //to convert the data's
        .then((data)=>setUser(data)) //to pass the data's
        //.catch((err)=>err)
    },[])
    return(
        <div className='container'>
            <h1 className='title'>User Details</h1>
            <div className='userData'>
            {user.map((Details)=>(
                    <div key={user.id}>
                        <p>Name:{Details.name}</p>
                        <p>Email:{Details.email}</p>
                        </div>
                 ))}
            </div>
            <div>

            </div>
             
        </div>
    )
}
export default App;
