import iconSearch from "../assets/iconSearch.png";
import iconCalendar from "../assets/iconCalendar.jpg";
import iconMessageQuestion from "../assets/iconMessageQuestion.jpg";
import iconNotification from "../assets/iconNotification.jpg";
import person from "../assets/person.png";
import {BsChevronDown} from 'react-icons/bs';

const ToolBar = () => {
  return (
    <div className="tool-bar flex">
      <div className="flex" id="search-box">
        <img src={iconSearch} alt="search bar" />
        <input type="search" placeholder="Search for anything..." />
      </div>
     <div className="tb-container-II flex">
     <div className="tool-bar-icons flex">
        <img src={iconCalendar} alt="calender" />
        <img src={iconMessageQuestion} alt="messages" />
        <img src={iconNotification} alt="notification" />
      </div>
      <div className="current-user-container flex">
        <div className="flex column">
          <p>Anima Agrawal</p>
          <p>U.P, India</p>
        </div>
        <img src={person} alt="current user profile" />
        <BsChevronDown />
      </div>
     </div>
     {/* <Hamburger open={open} onClick={() => setOpen(!open)} /> */}
    </div>
  );
};

export default ToolBar;
