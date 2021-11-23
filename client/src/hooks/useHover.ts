import React, { useEffect } from "react";

/** element에 호버한 시점에 파라미터로 들어온 함수를 실행함 */
export default function useClick(cb: () => void) {
  const element = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkClick = (e: MouseEvent): void => {
      if (element.current && !element.current.contains(e.target as Node)) {
        cb();
      }
    };

    document.addEventListener("mouseenter", checkClick);

    return () => {
      document.removeEventListener("mouseenter", checkClick);
    };
  }, [element, cb]);

  return element;
}
// 여기서 리턴한 element를 ref로 설정한다
// 그럼 해당 HTMLDivElement에 마우스를 올리면 cb가 실행됨
