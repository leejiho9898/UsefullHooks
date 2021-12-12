import "./styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  name: string;
  password: string;
  password_check: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && errors.email.type === "required" && (
        <p>이메일을 입력하세요.</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>이메일이 올바르지 않습니다.</p>
      )}
      <label>Name</label>
      <input {...register("name", { required: true, maxLength: 10 })} />
      {errors.name && errors.name.type === "required" && (
        <p>이름을 입력하세요.</p>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <p>이름은 10자 미만이어야 합니다.</p>
      )}
      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>비밀번호를 입력하세요.</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>비밀번호는 6자리 이상이어야 합니다.</p>
      )}
      <label>Password Check</label>
      <input
        type="password"
        {...register("password_check", {
          required: true,
          validate: (value) => value === watch("password"),
        })}
      />
      {errors.password_check && errors.password_check.type === "required" && (
        <p>비밀번호 확인을 입력하세요.</p>
      )}
      {errors.password_check && errors.password_check.type === "validate" && (
        <p>비밀번호가 일치하지 않습니다.</p>
      )}
      <input type="submit" />
    </form>
  );
};

export default Register;
