import Card from "./card";
import { Droppable } from 'react-beautiful-dnd';

const Cards = (props) => {
   const {cards} = props;
return(
      <Droppable droppableId="characters">
      {(provided) => (
   <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {cards.map((card,index) => (
          <Card key={card.id} card={card} index={index}/>
         ))}
        </ul>
            )}
        </Droppable>
);
}

export default Cards;