import { useEffect, useRef, useState } from "react";

function useObserver(options) {
  const [elements, setElements] = useState([]);
  const [targets, setTargets] = useState([]);

  const observer = useRef(
    new IntersectionObserver((observedEntries) => {
      setTargets(observedEntries);
    }, options)
  );

  useEffect(() => {
    const currentObserver = observer.current;

    currentObserver.disconnect();

    elements.length > 0
      ? elements.forEach((currentElement) =>
          currentObserver.observe(currentElement)
        )
      : null;

    return () => {
      currentObserver ? currentObserver.disconnect() : null;
    };
  }, [elements]);

  return [observer.current, setElements, targets];
}

export default useObserver;
