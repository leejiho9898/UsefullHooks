import React, { useEffect } from "react";

/** element를 클릭할 시점에 파라미터로 들어온 함수를 실행함 */
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
// 여기서 리턴한 element를 ref로 설정한다
// 그런다음 해당 HTMLDivElement를 누르면 cb가 실행됨
