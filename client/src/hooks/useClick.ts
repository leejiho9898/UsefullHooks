import React, { MutableRefObject, useEffect } from "react";

export default function useClick(cb: () => void) {
  const element = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkClick = (e: MouseEvent): void => {
      if (element.current && !element.current.contains(e.target as Node)) {
        cb();
      }
    };

    document.addEventListener("click", checkClick);

    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, [element, cb]);

  return element;
}
