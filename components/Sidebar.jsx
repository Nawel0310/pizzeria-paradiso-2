"use client";

import "@/styles/menuStyles.css";
import { IoMdPizza, IoMdBeer } from "react-icons/io";

const Sidebar = () => {
  {/*NOTA: Lo ideal en estos casos sería separar el botón del resto de la sidebar
    y reducir el impacto en el SEO. Sin embargo, como este componente no impacta
    mucho en este caso, lo dejamos así.*/}


  const handleLinkClick = () => {
    const offcanvasElement = document.getElementById('offcanvas-menu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      offcanvas.hide(); // Cierra el offcanvas
    }
  };
  
  return (
    <div
      id="offcanvas-menu"
      className="offcanvas offcanvas-start bg-body sidebar-menu"
      tabIndex="-1"
    >
      <div className="offcanvas-header offcanvas-menu-header">
        <a
          className="link-body-emphasis d-flex align-items-center me-md-auto mb-3 mb-md-0 text-decoration-none"
          href="/"
        >
          <span id="title-sidebar" className="titulo">
            Menú
          </span>
        </a>
        <button
          className="btn-close"
          type="button"
          aria-label="Close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between pt-0">
        <div>
          <div>
            <h4 className="titulo-sidebar titulo">Menú Comidas</h4>
            <hr className="mt-0" />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a
                  className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                  data-bs-toggle="modal"
                  data-bs-target="#pizzaModal"
                  href="#"
                 
                >
                  <IoMdPizza className="me-2" /> Menú Pizzas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#otraComidaModal"
                  
                >
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"></path>
                  </svg>
                   Menú Otros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="titulo-sidebar titulo">Menú Bebidas</h4>
            <hr className="mt-0" />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a
                  className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                  href="#"
                  data-bs-target="#bebidasModal"
                  data-bs-toggle="modal"
                  
                >
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"></path>
                  </svg>{" "}
                  Menú Bebidas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#bebidasAlcoholicasModal"
                  
                >
                  <IoMdBeer className="me-2" />
                   Menú Bebidas Alcohólicas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="titulo-sidebar titulo">Exploración</h4>
            <hr className="mt-0" />
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#heroSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-sort-up me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></path>
                </svg>{" "}
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#aboutUsSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-info-circle-fill me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"></path>
                </svg>{" "}
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#especialidadesSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-grid-fill me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"></path>
                </svg>{" "}
                Especialidades
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#testimoniosSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-chat-square-dots-fill me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                </svg>{" "}
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#faqSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-question-circle-fill me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                </svg>
                 Preguntas Frecuentes (FAQ)
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link-body-emphasis opcion-menu custom-link subtitulo"
                href="#contactoSection"
                onClick={handleLinkClick}
              >
                <svg
                  className="bi bi-people-fill me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                </svg>
                 Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
