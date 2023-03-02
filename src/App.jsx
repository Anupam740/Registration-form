import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[userRegistation,setUserRegistration]=useState({
    username: "",
    email: "",
    phone: "",
    password:""
  });
  const[records,setRecords]=useState([])
  const handleInput =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setUserRegistration({ ...userRegistation, [name] : value});

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord ={ ... userRegistation,id:new Date().getTime().toString()}
    console.log(records);
    setRecords([... records, newRecord]);
    console.log(records);
    setUserRegistration({username:"", email:"", phone:"",password:""})

  }
  return (
    
      
    
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname: </label>
          <input type="text"  name="username" onChange={handleInput} value={userRegistation.username} id="username"/>
        </div> 
        <div>
          <label htmlFor="Email">Email :</label>
          <input type="text" name="email" onChange={handleInput} value={userRegistation.Email} id="email"/>
        </div>   
        <div>
          <label htmlFor="Phone">Phone :</label>
          <input type="text" name="phone" onChange={handleInput} value={userRegistation.Phone} id="phone"/>
        </div>  
        <div>
          <label htmlFor="Password">Password :</label>
          <input type="text" name="password" onChange={handleInput} value={userRegistation.password} id="password"/>
        </div>
        <button  type="submit"> Registration</button>
        
        </form>
        <div>
          {
            records.map((curElem) =>{
              return(
                <div>
                  <p>{curElem.username}</p>
                  <p>{curElem.email}</p>
                  <p>{curElem.phone}</p>
                  <p>{curElem.password}</p>
                  </div>
              )
            })
          }  
       </div>    
          


        
      



     
    </div>
  )} 

