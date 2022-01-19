import requestPayMents from "../../hooks/usePay";

const Pay = () => {
  // * 테스트용 클라이언트 키로 시작하세요

  const item = {
    amount: 1,
    orderId: "brL9yXo4bVrpAHe7p5sgZ",
    orderName: "토스 티셔츠 외 2건",
    customerName: "박토스",
    successUrl: "http://localhost:3000/success",
    failUrl: "http://localhost:8080/fail",
  };
  return (
    <>
      <button
        onClick={() => {
          requestPayMents(item);
        }}
      >
        눌러보세요
      </button>
    </>
  );
};

export default Pay;
