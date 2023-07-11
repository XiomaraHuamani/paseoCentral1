import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LineIcon from "react-lineicons";
import { NavLink } from "react-bootstrap";
//import styles from "./navbar.css";
import "./navbar.css";
//import img1 from "./img/logo1.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="row ">
        <div className="container-fluid   overflow-hidden" >
          <nav className={classNames("navbar", "navbar-expand-lg", "navbar-transparent", "fixed-top", "bg-black-transparent", "shadow")}>
            <div className={classNames("container")}>
              <a className={classNames("navbar-brand")} href="/home">
                RecyTec
              </a>

              <a href="ticket.html" className={classNames("btn", "custom-btn", "d-lg-none", "ms-auto", "me-4")}>
                Buy Ticket
              </a>

              <button
                className={classNames("navbar-toggler")}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className={classNames("navbar-toggler-icon")}></span>
              </button>

              <div className={classNames("collapse", "navbar-collapse")} id="navbarNav">
                <ul className={classNames("navbar-nav", "align-items-lg-center", "ms-auto", "me-lg-5")}>
                  <li className={classNames("nav-item")}>
                    <a className={classNames("nav-link", "click-scroll")} href="#section_1">
                      Inicio
                    </a>
                  </li>

                  <li className={classNames("nav-item")}>
                    <a className={classNames("nav-link", "click-scroll")} href="#section_2">
                      Acerca de
                    </a>
                  </li>

                  <li className={classNames("nav-item")}>
                    <a className={classNames("nav-link", "click-scroll")} href="#section_3">
                      ¿Que puedo reciclar?
                    </a>
                  </li>

                  <li className={classNames("nav-item")}>
                    <a className={classNames("nav-link", "click-scroll")} href="#section_4">
                      Ideas
                    </a>
                  </li>

                  <li className={classNames("nav-item")}>
                    <a className={classNames("nav-link", "click-scroll")} href="#section_6">
                      ¿Quieres ser parte?
                    </a>
                  </li>
                </ul>

                <a href="ticket.html" className={classNames("btn", "custom-btn", "d-lg-block", "d-none")}>
                  Registro
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
};
export default Navbar;