import './App.scss';
import {useState} from 'react';
import ChangeNumber from './changeNumber';
import Box from './box';
import './unactive.svg';
import './available.svg';





const App=()=> {
  const [boxArray,setBoxArray]=useState([...Array(100).keys()]);
  const [index, setIndex] = useState(boxArray.length+1);
  const [indexTwo, setIndexTwo] = useState(boxArray.length+2);

  const [widthnumber,setWidthnumber]=useState(100)
  const [heightnumber,setHeightnumber]=useState(100)
  const [changeItemFirst, setChangeItemFirst]=useState(true);
  const [changeItemSecond, setChangeItemSecond]=useState(false);

  const moveCard=(item:number,changeItemFirst:boolean,changeItemSecond:boolean)=>{
    console.log(changeItemSecond)
      if(changeItemFirst){
        setIndex(item);
      } else if(changeItemSecond) {
        setIndexTwo(item)
      }
  }
  const clickChangeItemFirst=()=>{
    console.log(changeItemFirst);
    setChangeItemFirst(!changeItemFirst)
    setChangeItemSecond(false)
  }
 const clickChangeItemSecond=()=>{
    console.log(changeItemSecond);
    setChangeItemSecond(!changeItemSecond)
    setChangeItemFirst(false)
  }
  const addNumber=(num:number)=> {
    console.log(num);
    let arr=[...Array(+num*+num+1).keys()];
    arr.shift()
    console.log(arr)
    setBoxArray(arr)
    switch(num){
      case 10:
        setWidthnumber(100);
        setHeightnumber(100);
        break;
      case 11:
        setWidthnumber(90);
        setHeightnumber(90);
        break;
      case 12:
        setWidthnumber(80);
        setHeightnumber(80);
        break;
      default:
        setWidthnumber(100-((num*10)-100));
        setHeightnumber(100-((num*10)-100));
    }
    }
  const elements = boxArray.map((item) => {
    return (
      <Box
      widthnumber={widthnumber}
      heightnumber={heightnumber} 
      key={item} card={changeItemFirst?index === item:null} card2={changeItemSecond?indexTwo === item:null}  moveCard={()=>moveCard(item,changeItemFirst,changeItemSecond)}/>
    );
  });
  return (
    <>
      <div className="header">
            <h1>Boxes</h1>
            <ChangeNumber addNumber={addNumber}/>
            <div className="navbar">
                <div className="navbarButtons">
                  <h3>Application activation field</h3>
                  <div className="navbarButtonsFirst">
                      <button onClick={clickChangeItemFirst}>activate DND of the first object</button>
                      {changeItemFirst?<img width="20px" src="available.svg" alt="ative"/>:<img width="20px" src="unactive.svg" alt="unactive"/>}

                  </div>
                  <div className="navbarButtonsSecond">
                      <button onClick={clickChangeItemSecond}>activate DND of the second object</button>
                      {changeItemSecond?<img width="20px" src="available.svg" alt="ative"/>:<img width="20px" src="unactive.svg" alt="unactive"/>}

                  </div>
                </div>
                  <Box  
                    key={1}
                    card={index === boxArray.length+1}
                    moveCard={()=>moveCard(boxArray.length+1,changeItemFirst,changeItemSecond)}/>
                  <Box key={2}
                    card2={indexTwo === boxArray.length+2}
                    moveCard={()=>moveCard(boxArray.length+1,changeItemFirst,changeItemSecond)}/>
            </div>
      </div>
      <div className="app">
        {elements}
      </div>
    </>
  );
}

export default App;
