import calendar from "../assets/calendar.png";
import filter from "../assets/filter.png";
import { BsChevronDown } from "react-icons/bs";
import categorySquare from "../assets/categorySquare.jpg";
import iconMembers from "../assets/iconMembers.jpg";
import pause from "../assets/pause.png";

const ProjectFilters = () => {
  return (
    <div className="kanban-ProjectDetails flex project-filter">
      <div className="flex">
        <div className="filter-btn">
          <img src={filter} alt="Filter" />
          <p>Filter</p>
          <BsChevronDown />
        </div>
        <div className="filter-btn">
          <img src={calendar} alt="Calender" />
          <p>Today</p>
          <BsChevronDown />
        </div>
      </div>
      <div className="flex">
      <div className="filter-btn">
        <img src={iconMembers} alt="Share" />
        <p>Share</p>
      </div>
      <span id="grey-divider"></span>
      <span id="pause-btn"><img src={pause} alt="pause button"/></span>
      <img src={categorySquare} alt="categories" id="category-btn"/>
      </div>
    </div>
  );
};

export default ProjectFilters;
