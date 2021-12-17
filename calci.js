import './calc.css';
import React,{useState} from 'react';

function Calculator(){
    var[res,setres]=useState("");
 function display(e){
     setres(res.concat(e.target.name))
 }   
 function clr(){
     setres("");
 }
 function dlt(){
     setres(res.slice(0,-1))
 }
 function calc(){
     try{
     setres(eval(res));
     }catch(err){
         setres("error")
     }
 }
    return(
<div class="calci">    
            <input type="text" placeholder="00" id="txt" value={res}/>

            <input onClick={clr} type="button" value="Clr" />
            <input  onClick={dlt} type="button" value="Del" />
            <input  onClick={display} name="%" type="button" value="%" />
            <input  onClick={display}name="/" type="button" value="/" />
            <input  onClick={display}name="7"type="button"value="7" />
            <input  onClick={display}name="8"type="button" value="8" />
            <input  onClick={display}name="9" type="button" value="9" />
            <input  onClick={display}name="*"type="button" value="*" />
            <input  onClick={display}name="4"type="button" value="4" />
            <input  onClick={display}name="5"type="button" value="5" />
            <input  onClick={display}name="6"type="button" value="6" />
            <input  onClick={display}name="-"type="button" value="-" />
            <input  onClick={display}name="1"type="button" value="1" />
            <input  onClick={display}name="2"type="button" value="2" />
            <input  onClick={display}name="3"type="button" value="3" />
            <input  onClick={display}name="+"type="button" value="+" />
            <input  onClick={display}name="0"type="button" value="0" />
            <input  onClick={display}name="."type="button" value="." />
            <input  onClick={calc}id="equ"type="button" value="=" />
     </div>
            );
         }
export default Calculator;
       