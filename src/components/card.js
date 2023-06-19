import Asignee from "./Asignee";
import iconMessage from '../assets/iconMessage.jpg';
import iconFile from '../assets/iconFile.png';
import { Draggable } from 'react-beautiful-dnd';
import Images from "./Images";

const Card = (props) => {
   const {card, index } = props;
    return(
      <Draggable draggableId={card.id.toString()} index={index}>
               {(provided) => (
       <li className="card flex column"  ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="card-priority flex">
        <span className={card.priority}>{card.priority}</span>
        <span>...</span>
        </div>
        <h3>{card.title}</h3>
        {card.description?(<p>{card.description}</p>):(<Images images={card.images}/>)}
        <div className="card-footer flex">
        <Asignee assignee={card.assignee}/>
        <div className="comment-and-files flex">
       <div>
       <img src={iconMessage} alt="comments" />
        <p>{card.numberOfComments} Comments</p>
       </div>
       <div>
        <img src={iconFile} alt="Files" />
        <p>{card.numberOfFiles} Files</p>
       </div>
        </div>
        </div>
       </li>
       )}
       </Draggable>
    );
    }
    
    export default Card;