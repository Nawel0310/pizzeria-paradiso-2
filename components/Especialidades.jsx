import "@/styles/especialidadesStyles.css";
import CarouselItem from "./CarouselItem";

const Especialidades = () => {
  const pizzas = [
    {
      imagen: "pizza1.png.png",
      titulo: (
        <>
          <span style={{ color: "rgb(207, 39, 52)" }}>Pepper</span>
          <span style={{ color: "rgb(220, 220, 220)" }}>oni Cl</span>
          <span style={{ color: "rgb(0, 147, 68)" }}>ásica</span>
        </>
      ),
      descripcion:
        "Una base crujiente y dorada, cubierta con nuestra salsa de tomate casera, queso mozzarella derretido, y una generosa cantidad de rodajas de pepperoni perfectamente especiado. Una opción irresistible para los amantes de lo clásico.",
    },
    {
      imagen: "pizza2.webp.webp",
      titulo: (
        <>
          <span style={{ color: "rgb(207, 39, 52)" }}>Hawai</span>
          <span style={{ color: "rgb(220, 220, 220)" }}>ana Tr</span>
          <span style={{ color: "rgb(0, 147, 68)" }}>opical</span>
        </>
      ),
      descripcion:
        "Una invitación para una combinación única de ingredientes: jugosa piña dorada, tierno jamón ahumado, y queso mozzarella que se funde en cada bocado. La mezcla dulce y salada te llevará a un paraíso de sabores para quienes buscan algo diferente.",
    },
    {
      imagen: "pizza3.png.png",
      titulo: (
        <>
          <span style={{ color: "rgb(207, 39, 52)" }}>Buffa</span>
          <span style={{ color: "rgb(220, 220, 220)" }}>lo Pi</span>
          <span style={{ color: "rgb(0, 147, 68)" }}>cante</span>
        </>
      ),
      descripcion:
        "Una sabrosa salsa de queso azul que se fusiona con tiras de pollo marinado en nuestra salsa Buffalo especial. Derretida y un toque de apio fresco, esta pizza ofrece un contraste entre lo cremoso y lo picante para hacer vibrar tus papilas gustativas.",
    },
  ];

  return (
    <section
      id="especialidadesSection"
      className="d-flex flex-column justify-content-center align-items-center align-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="titulo-especialidades" className="titulo">
              Algunas De Nuestras Especialidades
            </h1>
          </div>
        </div>
      </div>
      <div
        id="carousel-1"
        className="carousel slide carousel-dark carousel-inner"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-inner">
          {pizzas.map((pizza, index) => (
            <CarouselItem
              key={index}
              isActive={index === 0}
              imagen={pizza.imagen}
              titulo={pizza.titulo}
              descripcion={pizza.descripcion}
            />
          ))}
        </div>
        <div>
          <a
            className="carousel-control-prev"
            href="#carousel-1"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next carousel-control"
            href="#carousel-1"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <div className="carousel-indicators">
          {pizzas.map((_, index) => (
            <button
              key={index}
              className={index === 0 ? "active" : ""}
              type="button"
              data-bs-target="#carousel-1"
              data-bs-slide-to={index}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
