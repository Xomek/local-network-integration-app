import { number, object, string } from "yup";

const createFormSchema = object({
  ip: string().required("Это обязательное поле"),
  port: number().required("Это обязательное поле"),
});

export default createFormSchema;
