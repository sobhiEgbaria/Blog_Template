import "./List_of_cards.css";
import { Card } from "../cards/Card";
export const ListOfCards = ({ data }) => {
  return (
    <>
      <div className="cards_section">
        <div className="list_container">
          {data.map((data) => (
            <div>
              <Card
                img={data.img}
                title={data.title}
                description={data.description}
                date={data.date}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
