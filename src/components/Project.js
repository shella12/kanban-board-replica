import ProjectColumn from "./ProjectColumn";
import ProjectDetails from "./ProjectDetails";
import ProjectFilters from "./ProjectFilters";
import { nanoid } from 'nanoid';

const Project = () => {
    const person = "https://github.com/shella12/kanban-board-replica/assets/44798044/974ab627-07b4-4769-88e1-12bcf9d299bb"
    const person1 = "https://github.com/shella12/kanban-board-replica/assets/44798044/73fd6426-2b1c-41a6-ac2b-c40301a8ad11";
    const person2 = "https://github.com/shella12/kanban-board-replica/assets/44798044/e6e963fd-e15f-4ca4-a0c2-b16eaf2538aa";
    const person3 = "https://github.com/shella12/kanban-board-replica/assets/44798044/e0b3f915-ef39-4831-97e1-5557f091d557";
    const person4 = "https://github.com/shella12/kanban-board-replica/assets/44798044/c954a98c-c6a4-405f-a831-5a36b23497ff";

    const todo = [
        {
        id: nanoid(),
        title:"Brainstorming",
        description:"Brainstorming brings team members' diverse experience into play. ",
        priority:"low",
        numberOfAssignee:3,
        assignee: [person1, person3, person4],
        numberOfComments: 12,
        numberOfFiles: 0
    },
    {
        id: nanoid(),
        title:"Research",
        description:"User research helps you to create an optimal product for users.",
        priority:"high",
        numberOfAssignee:2,
        assignee: [person2, person],
        numberOfComments: 10,
        numberOfFiles: 3
    },
    {   
        id: nanoid(),
        title:"Wireframes",
        description:"Low fidelity wireframes include the most basic content and visuals.",
        priority:"high",
        numberOfAssignee:3,
        assignee: [person2, person, person4],
        numberOfComments: 10,
        numberOfFiles: 3
    }
];
return(
    <section className="kanban-project">
    <ProjectDetails projectName = "Mobile App"/>
    <ProjectFilters />
    <div className="grid">
    <ProjectColumn columnTitle="To Do" color="royla-blue" numberOfCards="4" cards={todo}/>
    <ProjectColumn columnTitle="On Progress" color="orange" numberOfCards="3" cards={todo}/>
    <ProjectColumn columnTitle="Done" color="green" numberOfCards="2" cards={todo}/>
    </div>
     </section>
);
}

export default Project;