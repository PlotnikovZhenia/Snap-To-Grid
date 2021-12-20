import {useDrag} from "react-dnd";
import './object.scss';

const Card:React.FC=()=>{
    const [{isDragging}, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    return (
      <div
        className="card"
        style={{
        backgroundColor: isDragging? "#fff": "gold",
      }}
        ref={dragRef}
      >
        The first object
      </div>
    )
  }
export default Card;