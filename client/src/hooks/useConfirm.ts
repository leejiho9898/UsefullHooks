/** 함수 실행전에 한번더 확인 시키는 함수*/
export default function useConfirm(message: string, onConfirm: () => void) {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return confirmAction;
}

// 파라미터는 보낼 메세지 ,실행할 함수
