import "../styles/Navbar-Right-Links-icons.css";
import "../styles/navbarStyles.css";
import Link from "next/link";
import Sidebar from '@/components/Sidebar';
import MenuPizza from '@/components/Menu/MenuPizza';
import MenuOtros from '@/components/Menu/MenuOtros';
import MenuBebidas from '@/components/Menu/MenuBebidas';
import MenuBebidasAlcoholicas from '@/components/Menu/MenuBebidasAlcoholicas';

const Navbar = () => {

  return <>
    <nav id="navbar" className="navbar navbar-expand-md sticky-top bg-body py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon bg-icon">
            <svg
              className="icon icon-tabler icon-tabler-pizza"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z"></path>
              <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479"></path>
              <path d="M13 11.01v-.01"></path>
              <path d="M11 14v-.01"></path>
            </svg>
          </span>
          <span id="brand-id" className="titulo">
            <span style={{ color: "rgb(207, 39, 52)" }}>Pizzer</span>
            <span style={{ color: "rgb(220, 220, 220)" }}>ia Par</span>
            <span style={{ color: "rgb(0, 147, 68)" }}>adiso</span>
          </span>
        </Link>
        <button
          id="navbar-toggler"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-2"
          type="button"
          aria-controls="navcol-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-2" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex flex-row justify-content-end align-items-center align-content-center">
              <a
                className="btn btn-light text-capitalize ms-md-2 parrafo btn-basico btn-menu"
                href="#contactoSection"
              >
                contacto
              </a>
            </li>
            <li className="nav-item d-flex flex-row justify-content-end align-items-center align-content-center">
              <button
                className="btn btn-light text-capitalize ms-md-2 parrafo btn-basico btn-menu"
                data-bs-target="#offcanvas-menu"
                data-bs-toggle="offcanvas"
              >
                ver menú
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/*Sidebar y Modals*/}
    <Sidebar></Sidebar>
        <MenuPizza></MenuPizza>
        <MenuOtros></MenuOtros>
        <MenuBebidas></MenuBebidas>
        <MenuBebidasAlcoholicas></MenuBebidasAlcoholicas>




    </>
};

export default Navbar;
