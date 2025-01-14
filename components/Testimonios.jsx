import TestimoniosCard from "./TestimoniosCard";
import "@/styles/testimoniosStyles.css";

const testimoniosData = [
  {
    nombre: "Andrea Gutiérrez",
    imagen: "persona1.webp.webp",
    descripcion: "No soy una gran fanática de la pizza... Pero la pizza Búfalo es sencillamente increíble. El balance perfecto entre lo picante y lo sabroso.\n\nDefinitivamente, mi nueva pizza favorita.",
    alt: "Testimonio de mujer joven"
  },
  {
    nombre: "Juan Perez",
    imagen: "persona2.webp.webp",
    descripcion: "La calidad de los ingredientes y el sabor son insuperables.\n\nAdemás, el ambiente es tan acogedor que me siento como en casa cada vez que la visito.",
    alt: "Testimonio de hombre joven"
  },
  {
    nombre: "Diego Ramírez",
    imagen: "luis-villasmil-hh3ViD0r0Rc-unsplash.webp.webp",
    descripcion: "He probado muchas pizzas hawaianas, pero ninguna se compara con la que hacen aquí.\n\nLa combinación de la piña dulce con el jamón ahumado es simplemente perfecta.",
    alt: "Testimonio de hombre joven"
  }
];

const Testimonios = () => {
  return (
    <section id="testimoniosSection">
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 id="titulo-testimonios" className="text-capitalize subtitulo">
              Lo Que Dicen Nuestros Clientes...
            </h2>
            <h2 id="subtitulo-testimonios" className="text-capitalize titulo">
              ¡Ellos hablan por nosotros!
            </h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex flex-row justify-content-center align-items-center align-content-center">
          {testimoniosData.map((testimonio, index) => (
            <TestimoniosCard
              key={index}
              nombre={testimonio.nombre}
              imagen={testimonio.imagen}
              descripcion={testimonio.descripcion}
              alt={testimonio.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
