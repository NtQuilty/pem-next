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

  message: yup
    .string()
    .default('')
    .transform(value => value ?? ''),

  files: yup
    .mixed<File[]>()
    .default([])

    .test(
      'file-formats',
      'Поддерживаются только файлы в форматах: PDF, DXF, DWG, STL, STEP, IGS',
      value => {
        if (!value || !Array.isArray(value)) return true;
        const allowedExtensions = ['pdf', 'dxf', 'dwg', 'stl', 'step', 'igs'];
        return value.every(file => {
          const ext = file.name.split('.').pop()?.toLowerCase() || '';
          return allowedExtensions.includes(ext);
        });
      }
    ),

  agreeToTerms: yup.boolean().oneOf([true], 'Необходимо согласие').required('Обязательное поле'),
});
