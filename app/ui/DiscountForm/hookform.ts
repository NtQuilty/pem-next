import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Только буквы'),

  telephone: yup
    .string()
    .required('Обязательное поле')
    .test('is-valid-phone', 'Введите корректный номер телефона', value => {
      if (!value) return false;

      return /^\+7\d{3}\d{3}\d{2}\d{2}$/.test(value);
    }),

  mail: yup
    .string()
    .default('')
    .transform(value => value ?? ''),

  agreeToTerms: yup.boolean().oneOf([true], 'Необходимо согласие').required('Обязательное поле'),
});
