import Image from "next/image";


const CarouselItem = ({ isActive, imagen, titulo, descripcion }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <div className="container contenedor-pizzas">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-content-center">
            <Image
              className="img-fluid w-100 fit-cover rounded img-carousel"
              src={imagen}
              alt={titulo}
              loading="lazy"
              width={600}
              height={300}
            />
          </div>
          <div className="col-md-6">
            <h1 className="titulo-container titulo">{titulo}</h1>
            <div className="div-parrafo">
              <p className="parrafo-container desc-pizza parrafo">
                {descripcion}
              </p>
            </div>
            <div className="boton-ordenar div-boton-ordenar">
              <a
                className="btn btn-light btn-basico parrafo btn-especialidades"
                role="button"
                href="#contactoSection"
              >
                ¡Quiero Ordenar!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem; 