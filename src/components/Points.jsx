import Links from "./Links";

function Points({ elements, points, links, url }) {

  if (links === true) {
    const balanceArray = points.map((point, i) => {
      return (
        <li key={i} className="points__li">
          <Links
            linkOptions={{
              link: `https://imcp.gob.ve/balance/pdf/${url}/${point}${url}.pdf`,
              classTitle: "footer__links",
              target: "_blank",
            }}
          >
            {point}
          </Links>
        </li>
      );
    });

    return <ul className="points">{balanceArray}</ul>;
  }

  if (points) {
    const pointsArray = points.map((point, i) => {
      return (
        <li key={i} className="points__li">
          {point}
        </li>
      );
    });

    return <ul className="points">{pointsArray}</ul>;
  }
}

export default Points;
