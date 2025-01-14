import "@/styles/faqStyles.css";

const Faq = () => {
  // Array de preguntas frecuentes
  const preguntas = [
    {
      id: 1,
      pregunta: "¿Dónde están ubicados?",
      respuesta: "Nos encontramos en Calle Italia 123, Barrio Gourmet, Ciudad del Sabor. Contamos con estacionamiento gratuito para nuestros clientes. Estamos a solo unos minutos de los principales puntos de interés."
    },
    {
      id: 2,
      pregunta: "¿Ofrecen servicio de entrega a domicilio?",
      respuesta: "¡Claro! Puedes disfrutar de nuestras deliciosas pizzas desde la comodidad de tu hogar. Realizamos entregas en un radio de 10 kilómetros. Puedes realizar tu pedido a través de nuestras redes sociales o llamándonos directamente."
    },
    {
      id: 3,
      pregunta: "¿Tienen opciones sin gluten o para personas con restricciones alimentarias?",
      respuesta: "Ofrecemos opciones sin gluten y pizzas con ingredientes seleccionados para quienes tienen restricciones alimentarias. Solo debes avisarnos al momento de hacer tu pedido."
    },
    {
      id: 4,
      pregunta: "¿Puedo hacer una reserva para eventos especiales?",
      respuesta: "Por supuesto. Nuestro espacio es perfecto para celebrar cumpleaños, reuniones familiares, o cualquier ocasión especial. Contamos con un área privada que puedes reservar. Contáctanos para más detalles y disponibilidad."
    },
    {
      id: 5,
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos una amplia variedad de métodos de pago, incluyendo efectivo, tarjetas de crédito y débito, así como pagos digitales. Queremos que tu experiencia sea lo más cómoda posible."
    },
    {
      id: 6,
      pregunta: "¿Tienen promociones o descuentos?",
      respuesta: "¡Sí! Ofrecemos promociones especiales durante la semana, así como descuentos exclusivos para nuestros seguidores en redes sociales. No olvides seguirnos para estar al tanto de todas nuestras ofertas."
    }
  ];

  return (
    <section id="faqSection">
      <div id="faqContainer" className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 id="faq-titulo" className="titulo">
              <span style={{ color: "rgb(207, 39, 52)" }}>F</span>
              <span style={{ color: "rgb(220, 220, 220)" }}>A</span>
              <span style={{ color: "rgb(0, 147, 68)" }}>Q</span>
            </h1>
            <h4 id="subtitulo-faq" className="subtitulo">
              Toda la información que necesitas saber está aquí.
              <br />
              ¡No tengas miedo de preguntar!
            </h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-9 col-lg-6 col-xl-6 col-xxl-6">
            <div id="accordion-1" className="accordion" role="tablist">
              {preguntas.map((item) => (
                <div key={item.id} className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed item-faq-heading parrafo"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#accordion-1 .item-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`accordion-1 .item-${item.id}`}
                    >
                      {item.pregunta}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse item-${item.id} item-faq-content`}
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0 item-faq-parrafo parrafo">
                        {item.respuesta}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
