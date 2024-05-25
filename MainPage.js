import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function MainPage(props) {
  const navi=useNavigate();
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);
  const [update, doUpdate] = useState(true)
  const [count,setCount]=useState(1)
  const [Isupdate,setIsupdate] = useState(false)

  const handleChange = (e, type) => {
    if (type == "task") {
      setData({ ...data, task: e.target.value });
    } else if (type == "desc") {
      setData({ ...data, description: e.target.value });
    } else if (type == "assto") {
      setData({ ...data, assto: e.target.value });
    } else if (type == "assby") {
      setData({ ...data, assby: e.target.value });
    }
  };
  const handleAdd = () => {
    let x = arr;
    console.log(x)
    let data1 = data;
    setCount(count+1)
    data1.id = count;
    x.push(data1);
    setArr(x);
    setData({task:'',description:'',assto:'',assby:''})
    doUpdate(!update)
  };
  const handleDelete=(id)=>{
    let idx=arr.findIndex((val)=>(val.id==id))
    arr.splice(idx,1)
    doUpdate(!update)
  }
  const handleUpdate=(idx)=>{
    setData(arr[idx])
  }
  const handleUpdate1=()=>{ 
    let idx=arr.findIndex((val)=>(val.id==data.id))
    let arr1 = arr
    arr1[idx] = data
    setArr(arr1)
    setData({task:'',description:'',assto:'',assby:''})
    doUpdate(!update)
  }
  return (
    <>
    <div className="main">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <h2 className="title">Task List</h2>
          <h2>
          <button
          type="button"
          class="btn btn-secondary btn-lg btn2"
          onClick={() => {
            navi('/')
          }}
        >
          Log Out
        </button>
        {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onClick={() => {
                props.Login();
              }}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
          </h2>
        </div>
      </nav>
      <br />
      <br />
      <div className="m-3">
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
            Task
          </span>
          <input
            type="text"
            value={data.task}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "task");
            }}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Description
          </span>
          <input
            type="text"
            value={data.description}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "desc");
            }}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Assigned To
          </span>
          <input
            type="text"
            value={data.assto}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "assto");
            }}
          />
        </div>
        <br />

        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">
          Assigned By
          </span>
          <input
            type="text"
            value={data.assby}
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={(e) => {
              handleChange(e, "assby");
            }}
          />
        </div>
        <br />

        <button
          type="button"
          class="btn btn-secondary btn-lg btn1"
          onClick={() => {
            handleAdd();
          }}
        >
          ADD
        </button>
        
        <button
          type="button"
          class="btn btn-secondary btn-lg btn1"
          id="space"
          onClick={() => {
            handleUpdate1();
          }}
        >
          UPDATE
        </button>
        <br />
        </div>
        <br />
        </div>

        <table class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Assiened To</th>
            <th>Assiened By</th>
            <th colSpan={2}>Action</th>
          </tr>
          {arr.map((val,index) => (
            <tr>
              <td className="t">{val.id}</td>
              <td className="t">{val.task}</td>
              <td className="t">{val.description}</td>
              <td className="t">{val.assto}</td>
              <td className="t">{val.assby}</td>
              <td className="t1"><button type="button" class="btn btn-secondary btn-lg tb" onClick={(e)=>{handleUpdate(index)}}>Update</button></td>
              <td className="t1"><button type="button" class="btn btn-secondary btn-lg tb" onClick={(e)=>{handleDelete(val.id)}}>Delete</button></td>
            </tr>
          ))}
        </table>

    </>
  );
}

export default MainPage;
