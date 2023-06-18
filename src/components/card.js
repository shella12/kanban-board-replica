import Asignee from "./Asignee";
import iconMessage from '../assets/iconMessage.jpg';
import iconFile from '../assets/iconFile.png';

const Card = (props) => {
   const {card} = props;
    return(
       <li className="card flex column">
        <div className="card-priority flex">
        <span className={card.priority}>{card.priority}</span>
        <span>...</span>
        </div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
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
    );
    }
    
    export default Card;