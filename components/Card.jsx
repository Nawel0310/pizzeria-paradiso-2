import "@/styles/cardStyles.css";

const Card = ({ imagen, titulo, parrafo }) => {
  return (
    <div className="col">
      <div className="card card-thumbnail">
        <img
          className="card-img-top w-100 d-block fit-cover img-card-about-us"
          src={imagen}
          alt={titulo}
        />
        <div className="card-body p-4 card-desc">
          <h4 className="card-title titulo titulo-card">{titulo}</h4>
          <p className="card-text parrafo parrafo-card">{parrafo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
