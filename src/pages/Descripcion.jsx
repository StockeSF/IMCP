import { useContext } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import Tabs from "../components/Tabs";

function Descripcion() {
  const { jsons } = useContext(MainContext);
  const [params, setParams] = useSearchParams();

  let type = params.get("type") ?? "desc";
  let id = params.get("id") ?? "defensor_al_cliente";

  //en caso de que la url seleccionada no existe
  if (!jsons[type]) return <Navigate to="/error" />;
  else if (!jsons[type][id]) return <Navigate to="/error" />;

  const element = jsons[type][id];

  const descArray = element.map((info, i) => {
    return (
      <div className="descr__container" key={i}>
        {info.title && <div className="descr__title">{info.title}</div>}

        <div className="descr__text">{info.desc}</div>

        {info.tabs && (
          <Tabs
            tabsSettings={{
              category: info.tabs[0].tab,
              elements: info.tabs[0].text,
              points: info.tabs[0].points,
            }}
          />
        )}
      </div>
    );
  });

  return (
    <>
      <section className="descr">{element[0].pagetitle}</section>

      {descArray}
    </>
  );
}

export default Descripcion;
