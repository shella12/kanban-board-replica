import Card from "./card";

const Cards = (props) => {
   const {cards} = props;
return(
   <ul>
          {cards.map((card,index) => (
          <Card key={card.id} card={card} index={index}/>
         ))}
        </ul>
);
}

export default Cards;