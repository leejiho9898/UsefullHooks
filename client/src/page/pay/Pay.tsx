import { useForm, useToggle } from "@react-tool/hooks";
import requestPayMents from "../../hooks/usePay";

const Pay = () => {
  // * 테스트용 클라이언트 키로 시작하세요
  const { form, onChangeForm, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  console.log(form);
  
  const [istoggle, onToggle] = useToggle(false);
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
      <button onClick={onToggle}>토글</button>
      {istoggle ? <p>Hello</p> : <p>Bye</p>}

      <input value={form.name} onChange={onChangeForm} name="name" />
      <input value={form.email} onChange={onChangeForm} name="email" />
      <input value={form.password} onChange={onChangeForm} name="password" />
      <button onClick={onResetForm}>Reset</button>
    </>
  );
};

export default Pay;
