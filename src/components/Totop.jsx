import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function Totop() {
  const [totopButton, setTotopButton] = useState(false);

  const totopScrollHandler = () => {
    let scrollLvl = document.documentElement.scrollTop;
    const scrollLimit = 650;

    scrollLvl >= scrollLimit ? setTotopButton(true) : setTotopButton(false);
  };

  useEffect(() => {
    let totop = document.querySelector(".totop");

    totopButton
      ? totop.classList.replace("tt-disable", "tt-active")
      : totop.classList.replace("tt-active", "tt-disable");
  }, [totopButton]);

  window.addEventListener("scroll", totopScrollHandler);

  return (
    <button
      className="totop tt-disable"
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
    >
      <FaAngleUp className="totop__i" />
    </button>
  );
}

export default Totop;
