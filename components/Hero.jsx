import Image from "next/image";
import Link from "next/link";
import "../styles/Hero-Clean-images.css"
import "../styles/heroStyles.css"


const Hero = () => {
  return (
    <section id="heroSection">
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-md-flex align-items-md-center">
            <div>
              <h2 id="tituloHero" className="text-capitalize fw-bold titulo">
                El sabor de <span style={{ color: "rgb(0, 147, 68)" }}>It</span>
                <span style={{ color: "rgb(220, 220, 220)" }}>al</span>
                <span style={{ color: "rgb(207, 39, 52)" }}>ia </span>en cada
                porción
              </h2>
              <p className="my-3 subtituloHero subtitulo">
                Disfruta de nuestras pizzas artesanales, horneadas con pasión y
                los ingredientes más frescos.
                <br />
                Un bocado y sentirás la tradición.
              </p>
              <button
                className="btn btn-light btn-lg text-capitalize parrafo btn-basico btn-menu"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#pizzaModal"
                aria-label="Abrir el menú de pizzas"
              >
                Visita Nuestro Menú
              </button>
              <a
                className="btn btn-light btn-lg text-capitalize parrafo btn-basico btn-menu"
                href="#contactoSection"
                aria-label="Ir a la sección de contacto"
              >
                Contáctanos
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-row justify-content-center align-items-center align-content-center columna-imagen">
            <Image
              id="imgHero"
              className="rounded img-fluid w-100 fit-cover"
              src="/pizza-png.webp.webp"
              alt="Pizza italiana"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;