import { useRef, useState } from "react";

/** 이미지나 동영상등을 전체 화면으로 바꾸는 함수 */
export default function useFullScreen() {
  const [fullCheck, setFullCheck] = useState(false);

  const onFulls = () => {
    fullCheck ? exitFull() : triggerFull();
    setFullCheck(!fullCheck);
  };

  const element = useRef<any>();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, onFulls, fullCheck };
}
//사용법 : element를 ref로 넣고 onFulls 실행하면 전체화면,취소 가능
// exit 버튼은 {fullCheck && exit버튼} fullcheck가 true일때 나오게 해도되고 onFulls 버튼 하나로 해도됨
