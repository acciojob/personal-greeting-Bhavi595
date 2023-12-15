import React,{useState} from "react";

let Project = ()=>{
    let [text ,setText] = useState("");
function displaytext(e){
    setText("Hello "+e.target.value+"!");
}
    return (<div>
        <h1>Enter your name:</h1>
        <input onChange={displaytext}/>
        <p>{text}</p>
    </div>)
}

export default Project;