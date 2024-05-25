import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Login(props){
    const navi = useNavigate()
    const[data,setData]=useState({})

    const handleChange = (e,type)=>{
        if(type=='name'){
            setData({...data,name:e.target.value})
        }
        else if(type=='password'){
            setData({...data,password:e.target.value})
        }
        
    }

    const handleClick = ()=>{
        if(!data.name)
        {
            window.alert("Please enter UserName")
        }
        else if(!data.password)
        {
            window.alert("Please enter Password")
        }
        else
        {
          // localStorage.setItem('Login_Data',JSON.stringify(data))
          const un = localStorage.getItem("UserName")
          const p = localStorage.getItem("Password")
          if(un==data.name && p==data.password)
          {
            navi('/ToDo')
          }
          else{
            window.alert("Error UserName & Password are not same")
          }
        }
    }

    const handleClick1 = ()=>{
      localStorage.setItem("UserName","Manan")
      localStorage.setItem("Password","Manan1234")
    }
    return(
        <div className="main">
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <h2>Task List</h2>
          <a class="navbar-brand" href="#"></a>
        </div>
      </nav>
      <br />
      <br />
        <div className="m-3">
                <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            User Name
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "name");
            }}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Password
          </span>
          <input
            type="password"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "password");
            }}
          />
        </div>
        <br />

        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => {
            handleClick();
          }}
        >
          Log In
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => {
            handleClick1();
          }}
        >
          Register
        </button>
        </div>
        </div>
    )
}

export default Login