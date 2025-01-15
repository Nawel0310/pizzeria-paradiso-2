
import "@/styles/aboutUsStyles.css";
import Card from "./Card";
import ImagenTestimonio1 from "@/public/amasar-la-masa.webp.webp"
import ImagenTestimonio2 from "@/public/pizzaservice.webp.webp"
import ImagenTestimonio3 from "@/public/pizzaView.avif.avif"


const AboutUs = () => {
  return (
    <>
    <section id="aboutUsSection">
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 id="titulo-about-us" className="titulo titulos-about-us">
              ¿Quiénes somos?
            </h2>
            <h2 id="subtitulo-about-us" className="titulo titulos-about-us">
              ¿Qué ofrecemos?
            </h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-flex justify-content-center align-items-center align-content-center">
          <Card
            imagen={ImagenTestimonio1}
            titulo="Nuestra Historia"
            parrafo={
              <>
                Desde 1995, Pizzería Paradiso ha sido sinónimo de pizzas
                artesanales.
                <br />
                <br />
                Crecimos gracias a la lealtad de nuestros clientes, manteniendo
                viva nuestra tradición familiar.
              </>
            }
          />

          <Card
            imagen={ImagenTestimonio2}
            titulo="Nuestros Servicios"
            parrafo={
              <>
                Puedes visitarnos en nuestro local, pedir nuestras pizzas para
                llevar, o utilizar nuestro servicio de delivery para disfrutar
                desde tu hogar.
                <br />
                <br />
                Además, puedes hacer reservas para asegurarte un lugar en
                nuestras noches más concurridas.
              </>
            }
          />

          <Card
            imagen={ImagenTestimonio3}
            titulo="Nuestra Filosofía"
            parrafo={
              <>
                Usamos solo ingredientes de calidad, como harina importada y
                tomates madurados al sol.
                <br />
                <br />
                Cada pizza está hecha con amor para ofrecerte un sabor único.
              </>
            }
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
