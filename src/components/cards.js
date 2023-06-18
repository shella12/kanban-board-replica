import Card from "./card";

const Cards = (props) => {
   const {cards} = props
return(
   <ul>
          {cards.map((card) => (
          <Card
          key={card.id}
          card={card}
         />))}
        </ul>
);
}

export default Cards;