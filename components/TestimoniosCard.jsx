import Image from "next/image";


const TestimoniosCard = ({ nombre, imagen, descripcion }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div className="div-testimonios">
        <p className="bg-body-tertiary border rounded border-0 p-4 parrafo parrafo-testimonios">
          {descripcion}
        </p>
        <div className="d-flex">
          <Image
            className="rounded-circle flex-shrink-0 me-3 fit-cover img-testimonios"
            src={imagen}
            alt={nombre}
            loading="lazy"
            width={50} // Especificar el ancho
            height={50} // Especificar la altura
          />
          <div className="d-flex flex-row justify-content-center align-items-center align-content-center">
            <h1 className="titulo titulo-testimonio">{nombre}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniosCard; 