import { useEffect } from "react";

function Box({ boxInputs }) {
  const { classList, title, subtitle, text } = boxInputs;

  useEffect(() => {
    let box = document.querySelectorAll(".boox");

    const parallaxMoveHandler = () => {
      let boox = document.querySelector(".pc");
      let value = window.scrollY;

      boox.style.top = value * 0.25 + "px";
    };

    setTimeout(() => {
      box.forEach((element) => {
        element.classList.remove("fade");
        element.classList.remove("effect");
        element.style.transform = "translateY(5px)";

        if (element.classList.contains("sp")) {
          element.style.visibility = "visible";
        }

        window.addEventListener("scroll", parallaxMoveHandler);
      });
    }, 600);

    return () => {
      window.removeEventListener("scroll", parallaxMoveHandler);
    };
  }, []);

  return (
    <section className={`boox ${classList}`}>
      <div className="boox__elements">
        <h1 className="box__title-h1">{title}</h1>

        <h3 className="box__title-h3">{subtitle}</h3>

        <p className="box__text">{text}</p>
      </div>
    </section>
  );
}

export default Box;
