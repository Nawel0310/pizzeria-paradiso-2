import "@/styles/cardStyles.css";
import Image from "next/image";


const Card = ({ imagen, titulo, parrafo }) => {
  return (
    <div className="col">
      <div className="card card-thumbnail">
      <Image // Cambiar <img> por <Image>
          className="card-img-top w-100 d-block fit-cover img-card-about-us"
          src={imagen}
          alt={titulo}
          loading="lazy"
          width={500} // Especificar el ancho
          height={300} // Especificar la altura
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
