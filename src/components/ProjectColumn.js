import { Droppable } from "react-beautiful-dnd";
import Cards from "./cards";

const ProjectColumn = (props) => {
  const { columnTitle, color, numberOfCards, cards } = props;
  return (
    <div className="project-column">
      <div className="column-title flex">
        <span className="circle" id={color}></span>
        <h2>{columnTitle}</h2>
        <span className="number-of-cards">{numberOfCards}</span>
      </div>
      <hr className="card-divider-line" id={color} />

      <Droppable droppableId={columnTitle}>
        {(provided) => (
          <div
            className="todolist"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Cards cards={cards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ProjectColumn;
