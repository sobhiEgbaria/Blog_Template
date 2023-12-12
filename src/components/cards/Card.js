import "./Card.css";

export const Card = ({ img }) => {
  return (
    <>
      <div className="card">
        <div className="content">
          <p className="date">AUGust 13, 2021 </p>
          <h3 className="title">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </h3>
          <p className="description">
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </p>
        </div>
        <div className="img">
          <img src={img} alt="Avatar" />
        </div>
      </div>
    </>
  );
};
