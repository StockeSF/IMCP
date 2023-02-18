import { useContext, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import AbtusImg from "../../assets/images/quienesomos/img_abtus2.jpg";
import AbtusImg650 from "../../assets/images/quienesomos/img_abtus_650.jpg";
import AbtusBiography from "../../assets/images/icons/i_biography.png";
import AbtusMission from "../../assets/images/icons/i_mission.png";
import AbtusVision from "../../assets/images/icons/i_vision.png";

function Abtus() {
  return (
    <section className="abtus">
      <div className="abtus__row">
        <article className="abtus__col">
          <picture>
            <source srcSet={AbtusImg650} media="(max-width: 560px)" loading="lazy" />
            <img className="abtus__img" src={AbtusImg} alt="" loading="lazy" />
          </picture>

          <div>
            <h2 className="abtus__title-h2 effect">
              <span> Nuestra historia </span>
              <img
                className="abtus__title-h1-img"
                src={AbtusBiography}
                loading="lazy"
                alt=""
              />
            </h2>

            <p className="abtus__text effect">
              El Instituto Municipal de Crédito Popular inicia sus actividades
              el día 14 de noviembre de 1946 según la Gaceta Municipal Nro.
              6.6001, cuando en sesión extraordinaria el Consejo Municipal de
              Caracas dicta la Ordenanza de su creación. Su sede inicial fue en
              la esquina de Miracielos, Av. Lecuna donde permaneció hasta ser
              ubicado en la sede actual en el Bloque 1 de El Silencio, en la
              “Urbanización Carlos Raúl Villanueva” en honor al arquitecto de
              esta Obra.
              <br />
              <br />
              En aquellos años, prácticamente funcionaba como casa de empeño,
              garantizando al cliente la devolución del bien como garantía luego
              de la cancelación total del préstamo. Además de esto, el IMCP
              siempre trabajó con instrumentos financieros como Cuentas de
              Ahorro, Cuenta Corrientes y Depósitos a Plazo Fijo.
            </p>
          </div>
        </article>

        <article className="abtus__col">
          <div>
            <h2 className="abtus__title-h2 effect">
              <span> Misión </span>
              <img
                className="abtus__title-h2-img"
                src={AbtusMission}
                loading="lazy"
                alt="..."
              />
            </h2>

            <p className="abtus__text effect">
              Realizar operaciones de intermediación financiera y demás
              actividades y servicios financieros relacionados con su
              naturaleza, de conformidad a lo establecido en la Ley General de
              Bancos y otras Instituciones Financieras. Asi como también apoyar
              financieramente los programas de interés social y de atención
              integral del ciudadano, que defina el Municipio en términos que
              convengan a ambas Instituciones.
            </p>
          </div>

          <div>
            <h2 className="abtus__title-h2 effect">
              <span> Visión </span>
              <img
                className="abtus__title-h2-img"
                src={AbtusVision}
                loading="lazy"
                alt="..."
              />
            </h2>

            <p className="abtus__text effect">
              Consolidarse como factor determinante de apalancamiento de la
              actividad productiva y financiera en el Municipio Libertador,
              brindando servicios financieros de calidad con tecnología digital
              para coadyugar el cumplimiento de la misión.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Abtus;
