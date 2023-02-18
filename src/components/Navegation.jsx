import { useEffect, useState } from "react";
import Links from "./Links";
import logo from "../assets/images/favicon/imcp.jpg"

function Navegation() {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [responsiveMenu, setResponsiveMenu] = useState(false);

  const stickyMenuHandler = () => {
    let scrollYNumber = window.scrollY;
    let windowWidth = screen.width;
    const tabletWidth = 992;
    const scrollLimit = 1;

    if (windowWidth >= tabletWidth) {
      scrollYNumber >= scrollLimit ? setStickyMenu(true) : setStickyMenu(false);
    }
  };

  const responsiveButtonHandler = () => {
    responsiveMenu === false
      ? setResponsiveMenu(true)
      : setResponsiveMenu(false);
  };

  useEffect(() => {
    let header = document.querySelector(".header");
    let iconBtn = document.querySelector(".icon-btn");

    header.classList.toggle("header__scrolling", stickyMenu);

    header.classList.toggle("clicked", responsiveMenu);
    iconBtn.classList.toggle("clicked", responsiveMenu);
  }, [stickyMenuHandler, responsiveButtonHandler]);

  window.addEventListener("scroll", stickyMenuHandler);

  return (
    <>
      <section className="icon-btn" onClick={responsiveButtonHandler}>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </section>

      <header className="header">
        <div className="header__logo-container">
          <img src={logo} className="header__logo-img" />
        </div>

        <nav className="header__links-div">
          <ul className="header__links-ul">
            <li className="header__links-li">
              <Links linkOptions={{ link: "/", classTitle: "header__links" }}>
                Inicio
              </Links>
            </li>
            <li className="header__links-li">
              <Links
                linkOptions={{
                  link: "/productos/cuentas",
                  classTitle: "header__links",
                }}
              >
                Cuentas
              </Links>
            </li>
            <li className="header__links-li">
              <Links
                linkOptions={{
                  link: "/productos/creditos",
                  classTitle: "header__links",
                }}
              >
                Créditos
              </Links>
            </li>
            <li className="header__links-li">
              <Links
                linkOptions={{
                  link: "/productos/servicios",
                  classTitle: "header__links",
                }}
              >
                Servicios
              </Links>
            </li>
            <li className="header__links-li">
              <Links
                linkOptions={{ link: "/balances", classTitle: "header__links" }}
              >
                Balances
              </Links>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navegation;
