import * as Yup from 'yup';

import { INVALID_EMAIL, REQUIRED, TOO_LONG, TOO_SHORT } from '../messages';

export const requestSchema = Yup.object().shape({
  name: Yup.string().min(2, TOO_SHORT).max(50, TOO_LONG).required(REQUIRED),
  message: Yup.string().min(2, TOO_SHORT).max(50, TOO_LONG).required(REQUIRED),
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED),
});
