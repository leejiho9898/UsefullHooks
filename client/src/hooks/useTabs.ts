import { useState } from "react";

/** 버튼 눌러서 contents 띄워줄때 쓰는 함수 */
export default function useTabs(initialTab: number, allTabs: any[]) {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const currentItem = allTabs[currentIndex];
  return [currentItem, setCurrentIndex];
}
//initialTab : index 기본값 , allTabs : 뿌려줄 배열
//사용법 : 버튼에 {Array.map((foo,index)~~} 사용한후 onclick => setCurrentIndex(index)
