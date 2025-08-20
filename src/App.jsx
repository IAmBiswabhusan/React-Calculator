import './App.css'
import Display from './Component/Display';
import Buttons from './Component/Buttons';
import { useState } from 'react';

function App() {
  let [calval,setcalval]=useState("");
  
  let onButtonClick=(value)=> {
    
      if(value==='c'){
        let newcalval="";
        setcalval(newcalval);
      }
      else if(value==='='){
        let result = eval(calval);
        let newcalval = result;
        setcalval(newcalval);
      }
      else{
          let newcalval = calval+ value;
          setcalval(newcalval);
      }
          
  };
  return (
    <div id="calculator">
      <Display DisplayValue={calval}></Display>
      <div id="Button-container">
        <Buttons onButtonClick={onButtonClick}></Buttons>  
      </div>
      </div>
  );
}

export default App
