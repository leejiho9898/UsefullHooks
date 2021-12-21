import { loadTossPayments } from "@tosspayments/payment-sdk";

interface usePayProps {
  amount: number;
  orderId: string;
  orderName: string;
  customerName: string;
  successUrl: string;
  failUrl: string;
}
const usePay = async (body: usePayProps) => {
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const tossPayments = await loadTossPayments(clientKey);
  tossPayments
    .requestPayment("카드", {
      amount: body.amount,
      orderId: body.orderId,
      orderName: body.orderName,
      customerName: body.customerName,
      successUrl: body.successUrl,
      failUrl: body.failUrl,
    })
    .catch((err) => {
      console.log(err);
    });
};

export default usePay;
