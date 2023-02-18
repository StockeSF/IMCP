import { useContext, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { MainContext } from "../context/MainContext";
import Points from "./Points";
import SwiperTabs from "./Swipers/SwiperTabs";

function Tabs({ tabsSettings }) {
  const { functions } = useContext(MainContext);
  const { toogleState } = functions;
  const [tabs, setTabs] = useState(tabsSettings.category[0]);

  const tabArray = tabsSettings.category.map((tab, i) => {
    return (
      <SwiperSlide
        key={i}
        className={tabs === tab ? "active-tab" : "tab"}
        onClick={() => toogleState(setTabs, tab)}
      >
        {tab}
      </SwiperSlide>
    );
  });

  //en caso de que se requieran links en el tab
  if (tabsSettings.points) {
    const pointsArray = tabsSettings.category.map((element, i) => {
      return (
        <div
          key={i}
          className={tabs === element ? "active-content" : "content"}
        >
          <Points
            points={tabsSettings.balance ? tabsSettings.points : tabsSettings.points[i]}
            elements={tabsSettings.category}
            links={tabsSettings.balance}
            url={tabsSettings.balance && tabsSettings.url[i]}
          />
        </div>
      );
    });

    return (
      <section className="tabs">
        <SwiperTabs className="tabs__tab">
          <div className="tabs__tab">{tabArray}</div>
        </SwiperTabs>
        <div className="tabs__content">{pointsArray}</div>
      </section>
    );
  }

  //en caso de que se requiera texto simple en el tab
  if (tabsSettings.category) {
    const textArray = tabsSettings.category.map((category, i) => {
      return (
        <div
          key={i}
          className={tabs === category ? "active-content" : "content"}
        >
          {tabsSettings.elements ? <p>{tabsSettings.elements[i]}</p> : null}
        </div>
      );
    });

    return (
      <section className="tabs">
        <SwiperTabs className="tabs__tab">
          <div className="tabs__tab">{tabArray}</div>
        </SwiperTabs>
        <div className="tabs__content">{textArray}</div>
      </section>
    );
  }
}

export default Tabs;
