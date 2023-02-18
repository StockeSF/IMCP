import Links from "../components/Links";

function Error() {
  return (
    <section className="e-404">
      <div className="e-404__container">
        <article className="e-404__box">
          <h1 className="e-404__title">Error 404.</h1>
          <p className="e-404__text">
            La página que estás buscando no existe. Puedes volver a la página
            principal pulsado aquí:
          </p>
          <Links linkOptions={{ link: "/", classTitle: "link-btn" }}>
            Volver al Inicio
          </Links>
        </article>
      </div>
    </section>
  );
}

export default Error;
