const Asignee = (props) => {
    const {assignee} = props;
     return(
        <div className="collaborators flex card-collab">
        {assignee.map((person)=> <img src={person} alt="assignee" />)}     
        </div>
     );
     }
     
export default Asignee;