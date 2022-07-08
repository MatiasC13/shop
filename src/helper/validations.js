import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  nombre: yup
    .string("La  debe ser un texto")
    .required("Debes ingresar una ")
    .min(6, "La debe tener al menos 6 carácteres"),
});

export default yupResolver(schema);
