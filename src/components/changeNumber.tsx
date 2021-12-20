import React, {useState} from'react';
import './changeNumber.scss';

interface IAddNumber {
    addNumber: (num: number) => void;
  }

const ChangeNumber=({addNumber}:IAddNumber)=>{
    const [newNumber,setNewNumber]=useState(10);
    const [erorrNumber,setErrorNumber]=useState(false);
    let classNameError='';
    const numberInput=(event: { target:HTMLInputElement; })=>{
            setNewNumber(+event.target.value);
        }
    const pushNumber=()=>{ 
        if(newNumber>9&&newNumber<13){
            addNumber(newNumber)
            setErrorNumber(false)
        }else {
            setErrorNumber(true);
        }
    }
    if (erorrNumber) {
        classNameError='inputError';
    }
    else{
        classNameError='';
    }
    return(
    <>
        <h3>The menu of grid's size</h3>
        <p>For example, 10&#8594;10*10 tiles</p>
        <p>WARNING ! You can't change size less 10 and more 12!</p>
        {erorrNumber?<p style={{color:'red'}}>You can't use this size</p>:null}
        <input type="text" value={newNumber} className={classNameError} onChange={numberInput}/>
        <button onClick={pushNumber}>
            Add my size
        </button>
    </>
    )
}


export default ChangeNumber;