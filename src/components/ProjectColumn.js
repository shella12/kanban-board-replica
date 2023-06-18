import Cards from "./cards";

const ProjectColumn = (props) => {
    const {columnTitle, color, numberOfCards, cards} = props;
    return(
        <div className="project-column">
         <div className="column-title flex">
         <span className="circle" id={color}></span>
         <h2>{columnTitle}</h2>
         <span className="number-of-cards">{numberOfCards}</span>
         </div>
         <hr className="card-divider-line" id={color}/>
        <Cards cards={cards}/>
         </div>
    );
    }
    
    export default ProjectColumn;