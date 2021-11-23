import { useEffect, useState } from "react";

/** document의 title를 바꾸는 함수 */
export default function useTitle(initialTitle: string) {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.title = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}

//helmet 으로 동일한 효과 가능
