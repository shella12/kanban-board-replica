import iconLink from '../assets/iconLink.jpg';
import iconEdit from '../assets/iconEdit.jpg';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';

const ProjectDetails = (props) => {
  const { projectName } = props;
  return (
    <div className="kanban-ProjectDetails flex">
      <div className="title-block flex">
      <h1 id="project-name">{projectName}</h1>
      <img src={iconEdit} alt = "Edit project name" className="project-details-icons"/>
      <img src={iconLink} alt = "Copy link"  className="project-details-icons"/>
      </div>
      <div className="collaboration-block flex">
      <span id="invite-icon">+</span>
      <p>Invite</p>
      <div className="collaborators flex">
        <img src={person1} alt="collaborator1"/>
        <img src={person2} alt="collaborator2"/>
        <img src={person3} alt="collaborator3"/>
        <img src={person4} alt="collaborator4"/>
        <span>+2</span>
      </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
