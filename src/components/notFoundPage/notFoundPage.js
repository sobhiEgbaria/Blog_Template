import img from "./404.jpeg";
export const NotFound = () => {
  return (
    <>
      <img
        src={img}
        alt=""
        style={{
          width: "70%",
          margin: "50px 20px 20px 180px",
        }}
      />
    </>
  );
};
