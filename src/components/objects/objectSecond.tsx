import {useDrag} from "react-dnd";
import './object.scss';

const CardTwo:React.FC=()=>{
    const [{isDragging}, dragRef] = useDrag({
        type: "card",
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    return (
      <div
        className="card2"
        style={{
        backgroundColor: isDragging? "#fff": "gold"
      }}
        ref={dragRef}
      >
       The second object
      </div>
    )
  }
export default CardTwo;