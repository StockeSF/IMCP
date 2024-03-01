import { useContext, useEffect } from "react";

import { MainContext } from "../../context/MainContext";

import { FaAddressCard, FaBalanceScale, FaHandHolding } from "react-icons/fa";

import Links from "../Links";

function Options() {
  const { useObserver } = useContext(MainContext);

  const [observer, setElements, entries] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    const options = document.querySelectorAll(".options");

    setElements(options);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const scrolledElements = entry.target;
        entry.target.classList.add("options__pc");
        observer.unobserve(scrolledElements);
      }
    });
  }, [entries, observer]);

  return (
    <section className="options">
      <Links linkOptions={{ link: "/productos/cuentas", classTitle: "options__links" }}>
        <FaAddressCard className="options__icon" />
        <p className="options__text">Cuentas</p>
      </Links>

      <Links linkOptions={{ link: "/productos/servicios", classTitle: "options__links" }}>
        <FaHandHolding className="options__icon" />
        <p className="options__text">Servicios</p>
      </Links>

      <Links linkOptions={{ link: "/balances", classTitle: "options__links" }}>
        <FaBalanceScale className="options__icon" />
        <p className="options__text">Balances</p>
      </Links>
    </section>
  );
}

export default Options;
