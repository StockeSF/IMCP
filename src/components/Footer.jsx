import { useContext } from "react";

import { MainContext } from "../context/MainContext";

import { FaInstagram } from "react-icons/fa";

import Links from "./Links";

function Footer() {
  const { timeStamps } = useContext(MainContext);

  return (
    <>
      <footer className="footer">
        <section className="footer__row">
          <article className="footer__section">
            <h5 className="footer__title">Nuestras sucursales</h5>

            <ul className="footer__ul">
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Sede Principal
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Sede Glorieta
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Sede San Martín
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Sede San Martín II
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Sede Sabana Grande
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=nuestras_sedes",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Taquilla Externa La Bandera
                </Links>
              </li>
            </ul>
          </article>

          <article className="footer__section">
            <h5 className="footer__title">Atención al usuario</h5>

            <ul className="footer__ul">
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=defensor_al_cliente",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Defensoría del cliente y usuario bancario
                </Links>
              </li>
            </ul>
          </article>

          <article className="footer__section">
            <h5 className="footer__title">Información de interés</h5>

            <ul className="footer__ul">
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "http://imcp.gob.ve/balance/pdf/Tasas/Tasas2022.pdf",
                    classTitle: "footer__links",
                    target: "_blank",
                  }}
                >
                  Tasas
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "http://imcp.gob.ve/balance/pdf/Tarifas/Tarifas2022.pdf",
                    classTitle: "footer__links",
                    target: "_blank",
                  }}
                >
                  Tarifas
                </Links>
              </li>
              <li className="footer__li">
                <Links
                  linkOptions={{
                    link: "/caracteristicas?type=desc&id=legitimacion_de_capitales",
                    classTitle: "footer__links",
                    target: "_self",
                  }}
                >
                  Prevención LC/FT
                </Links>
              </li>
            </ul>
          </article>
        </section>

        <section className="footer__end">
          <article>
            <div className="social">
              <Links
                linkOptions={{
                  link: "https://www.instagram.com/imcp_ccs/",
                  classTitle: "social__links instagram",
                  target: "_blank",
                }}
              >
                <FaInstagram className="social__icons" />
              </Links>
            </div>
          </article>

          <article>
            <p className="footer__disclaimer">
              Copyright © 1946 - {timeStamps.year} G-20006897-3 - IMCP. Todos
              los derechos reservados.
            </p>
          </article>
        </section>
      </footer>
    </>
  );
}

export default Footer;
