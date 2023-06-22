import * as yup from 'yup';
import 'src/config/yupConfig';

export const ClientSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().min(1).max(1).required(),
  phone_number: yup.string().min(1).required(),
});
