import {useDrop} from "react-dnd";
import Card from "./objects/objectFirst";
import CardTwo from "./objects/objectSecond";
import './box.scss';

interface IBox{
  card?:boolean|null,
  card2?:boolean|null,
  moveCard:() => void,
  widthnumber?:number,
  heightnumber?:number
}

const Box=({card, card2, moveCard, widthnumber,heightnumber}:IBox)=> {
    const [{isOver}, dropRef] = useDrop({
      accept: "card",
      drop: () => moveCard(),
      collect: (monitor) => ({
        isOver: !monitor.isOver(),
      }),
    });
    return (
      <div 
      className="box"
      ref={dropRef}
      style={{
        backgroundColor: isOver? "#bbb": "red",
        width:widthnumber+'px',
        height:heightnumber+'px'
      }}
      >
        {card ? <Card/> :null}
        {card2 ? <CardTwo/> : null}
      </div>
    )
  }
  export default Box;