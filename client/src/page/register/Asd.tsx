import { useForm, SubmitHandler } from "react-hook-form";

import "./styles.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Asd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input {...register("example")} defaultValue="test" />
      <label>ExampleRequired</label>
      <input
        {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
};
export default Asd;
