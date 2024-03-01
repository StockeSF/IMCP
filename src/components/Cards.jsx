import { useEffect } from "react";

import { useContext } from "react";
import { MainContext } from "../context/MainContext";

import Links from "./Links";

function Cards({ cardOptions }) {
  const { useObserver } = useContext(MainContext);
  const { button, title, srcSet, text, imgClass } = cardOptions;

  const [observer, setElements, entries] = useObserver({
    root: null,
  });

  useEffect(() => {
    const effectClass = document.querySelectorAll(".effect");
    setElements(effectClass);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.replace("effect", "visible");
      }
    });
  }, [entries, observer]);

  return (
    <div className="card effect">
      <div className="card__left">
        <Links
          linkOptions={{
            link: button.link,
            classTitle: "card__link",
          }}
        >
          <img
            alt={title}
            src={srcSet}
            className={`card__img ${imgClass ? imgClass : ""}`}
          />
        </Links>
      </div>

      <div className="card__right">
        <h5 className="card__title">{title}</h5>
        <p className="card__text">{text}</p>

        {button ? (
          <Links
            linkOptions={{ link: button.link, classTitle: button.classTitle }}
          >
            {button.text}
          </Links>
        ) : null}
      </div>
    </div>
  );
}

export default Cards;
