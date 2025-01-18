import { useState } from "react";
function Login(){
    const[subject,setsubject]=useState("");
    const[attended,setattended]=useState();
    const[held,setheld]=useState();
    const[result,setresult]=useState(null);
    const[status,setstatus]=useState(null);
    const [s,sets]=useState("");
    function title(event){
        setsubject(event.target.value);
    }    
    function tclasses(event){
        setheld(event.target.value);
    }
    function  aclasses(event){
        setattended(event.target.value);
    }
    function attendence(){
        const a=Number(attended);
        const h=Number(held);
        
        
        const percentage = (a / h) * 100;
        setresult(`Percentage:      ${percentage.toFixed(2)}%`); 
        const m=(a-(0.85*h))/0.85;
        const needed=(((0.85*h)-a)/(1-0.85));
        
        setstatus(m.toFixed(0));
        const message=`Status:   You can Miss next ${m.toFixed(0)} Classes`;
        const nmessage=`Status:  You Cannot Miss any Classes `;
        const pmessage=`Status:  You Need Attend Next ${needed.toFixed(0)} Classes`
        if(m>0){
            sets(message)
        }
        else if(m==0){
            sets(nmessage);
        }
        else{
            sets(pmessage);
        }
       
    }
    return(
        <div>
         <div className="gap">   
        <div className="input-form">
        <form > 
            <input type="text" onChange={title} value={subject} placeholder="Subject-Title"></input>
            <input type="number" onChange={aclasses}value={attended} placeholder="Classes Attended"></input>
            <input type="number" onChange={tclasses}value={held} placeholder="Out Of"></input>
        </form>
        <button onClick={attendence} className="b2">Calculate</button>
        
        <div className="result">
    
        <h2 className="res">{result}</h2>

        <h3 className="res1">{s} </h3>
        </div>  
        </div>
    </div>    
    </div>
    );
}
export default Login;