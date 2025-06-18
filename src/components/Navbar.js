import { NavLink } from "react-router-dom";
import iconHome from '../assets/iconHome.jpg';
import iconMessage from '../assets/iconMessage.jpg';
import iconMembers from '../assets/iconMembers.jpg';
import iconTasks from '../assets/iconTasks.jpg';
import lampOn from '../assets/lampOn.png';
import {RiSettings4Line} from "react-icons/ri";

const Navbar = (props) => {
  const {open} = props;
  return (
    <nav className={`${open?"active-navbar":""}`}>
     <div className="flex column nav-links">
      <NavLink to="/home"><img src={iconHome} className="nav-icons" alt="iconHome" />Home</NavLink>
      <NavLink to="/Messages"><img src={iconMessage} className="nav-icons"alt="iconMessage" />Messages</NavLink>
      <NavLink to="/Tasks"><img src={iconTasks} className="nav-icons" alt="iconTasks" />Tasks</NavLink>
      <NavLink to="/Members"><img src={iconMembers} className="nav-icons" alt="iconMembers"/>Members</NavLink>
      <NavLink to="/Settings"><RiSettings4Line className="nav-icons"/>Settings</NavLink>
      </div>
      <div className="flex column projects">
        <div class="my-projects-heading flex">
        <h2>my projects</h2>
        </div>
        <NavLink to="/" activeclassname="active"><span className="circle" id="green"></span>Mobile App</NavLink>
        <NavLink to="/Website Redesign" activeclassname="active"><span className="circle" id="orange"></span>Website Redesign</NavLink>
        <NavLink to="/Design System" activeclassname="active"><span className="circle" id="lilac"></span>Design System</NavLink>
        <NavLink to="/Wireframes" activeclassname="active"><span className="circle" id="blue"></span>Wireframes</NavLink>
      </div>
      <div className="nav-message-block flex column">
        <span><img src={lampOn} alt="Lamp on decoration"/></span>
        <div className="nav-message-block-details flex column">
        <h4>Thoughts Time</h4>
        <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
        <input type="text" placeholder="Write a message"/>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
