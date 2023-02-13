import React from "react";
import { useState } from "react";

const App = () => {
  const [item, setitem] = useState("")
  const [estime, setestime] = useState("")
  const [allTodo, setallTodo] = useState([])
  const saveTodo = () =>{
    let newTodo = {item, estime}
    setallTodo([...allTodo, newTodo])
    setitem("")
    setestime("")
  }
  const checkItem = (e) => {
    e.target.checked === true ? console.log(true) : console.log(false);
    console.log(e)
  }
  const ToDo = () => {
    return(
      <>
        <div style={{backgroundColor: "#1961ef", width: "100%", display: "grid", fontStyle: "italic" }}>
          {allTodo.map((array,index) => (
            <div key={index} style={{display: "inline-flex", padding: "2em", justifyContent: "space-between"}}>
              <input type="checkbox" name="" id="" onClick={checkItem} />
              <div>{array.item}</div>
              <div>{array.estime}</div> <br />
            </div>
          ))}
        </div>
      </>
    )
  }
  return (
    <>
      <div style={{backgroundColor: "#1961ef", textAlign: "center" }}>
        <h1 style={{marginTop: "0"}}>TO-DO LIST</h1>
      </div>
      <div style={{ padding: "2em", display: "grid", justifyContent: "center", alignItems: "center"}}>
        <div style={{display: "flex"}}>
          <input type="text" className="w-3/4 mb-2" style={{marginBottom: "1em", padding: "1em", width: "70%"}} placeholder="To-Do Item" onChange={(e) => {setitem(e.target.value)}} value={item} /> &nbsp;&nbsp;
          <input type="text" className="w-3/4 mb-2" style={{marginBottom: "1em", padding: "1em", width: "70%"}} placeholder="Time Estimated" onChange={(e) => {setestime(e.target.value)}} value={estime} />  
        </div><br />
        <button type="submit" style={{padding: "1em", backgroundColor: "#1961ef", outline: "none", borderRadius: "0.6em", width: "50%", margin: "0 0 0 7em" }} onClick={saveTodo}>Save</button><br />
        <ToDo />
      </div>
    </>
  );
}

export default App;
