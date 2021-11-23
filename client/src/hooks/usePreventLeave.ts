/** 저장하지 않고 나갈때 확인 하는 함수 */
export default function usePreventLeave() {
  const listener = (e:any) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
}
//enablePrevent를 onclick에 넣으면 끌때 물어본다.
//disablePrevent를 onclick에 넣으면 enablePrevent를 없엔다
