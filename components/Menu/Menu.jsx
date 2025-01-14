import "@/styles/modalStyles.css";


const Menu = ({ idModal, titulo, items }) => {
  return (
    <div
      id={idModal}
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header modal-header-menu">
            <h4 className="modal-title titulo-modal-menu titulo">{titulo}</h4>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body modal-body-comida">
            <div className="container">
              {items.map((item, index) => (
                <div key={index} className="row row-col-menu">
                  <div className="col">
                    <h4 className="titulo-comdia-modal subtitulo">
                      {item.titulo}
                    </h4>
                    <p className="desc-comida-modal parrafo">
                      {item.descripcion}
                    </p>
                  </div>
                  <div className="col-sm-3 text-end d-flex flex-column justify-content-start">
                    <h4 className="precio-comida-modal titulo">${item.precio}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer modal-footer-menu">
            <button
              className="btn btn-light btn-basico parrafo btn-modal"
              type="button"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
