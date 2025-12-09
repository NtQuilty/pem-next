'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
  FormHelperText,
  Snackbar,
  Alert,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { PhoneMaskCustom } from '../OrderForm/components/PhoneMaskCustom';
import { schema } from './hookform';
import { textFieldStyles } from '../../helpers';

interface FormValues {
  name: string;
  telephone: string;
  mail: string;
  agreeToTerms: boolean;
}

export const DiscountForm: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('RU');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      telephone: '',
      mail: '',
      agreeToTerms: false,
    },
    mode: 'onChange',
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      formData.append(key, String(data[key as keyof FormValues]));
    });

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BOT_API || '/api/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setSnackbar({
          open: true,
          message: `Заявка на скидку успешно отправлена!`,
          severity: 'success',
        });
        reset();
      }
    } catch {
      setSnackbar({
        open: true,
        message: 'Произошла ошибка при отправке заявки. Попробуйте снова или напишите нам на почту',
        severity: 'error',
      });
    }
  };

  return (
    <section className="relative mx-auto bg-[#13151e] pb-[50px] pt-[100px]">
      <div className="mx-auto px-4 md:max-w-[1350px]">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="md:w-1/2 ">
            <Image
              src="/images/sale.webp"
              alt="Скидка 10%"
              width={600}
              height={600}
              className="mx-auto h-auto max-w-full md:mx-0"
            />
          </div>

          <div className="w-full max-w-lg md:w-1/2">
            <div className="relative rounded-3xl border border-gray-700 bg-[#1b1e29] p-6 shadow-md">
              <div
                className="box-shadow-[inset_0_0_20px_rgba(100,100,100,0.2)] pointer-events-none absolute inset-0 rounded-lg opacity-30"
                style={{
                  border: '1px solid rgba(120, 120, 120, 0.2)',
                }}
              ></div>

              <h3 className="heading-md mb-2">Отправьте заявку</h3>
              <p className="text-body relative z-5 mb-6">
                И мы свяжемся с Вами в течение 15 минут
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box className="flex flex-1 flex-col gap-2">
                      <TextField
                        fullWidth
                        placeholder="Ваше имя *"
                        value={field.value}
                        onChange={field.onChange}
                        error={!!error}
                        sx={textFieldStyles}
                        slotProps={{
                          input: {
                            className: 'bg-[#262d37] !rounded-2xl !text-white',
                            startAdornment: (
                              <Box className="mr-2">
                                <IoPersonOutline size={20} color="white" />
                              </Box>
                            ),
                          },
                        }}
                      />
                      {error && (
                        <FormHelperText error className="md:ml-3">
                          {error.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />

                <Controller
                  name="telephone"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box className="flex flex-1 flex-col gap-2">
                      <PhoneMaskCustom
                        value={field.value}
                        onChange={field.onChange}
                        onCountryChange={country => setSelectedCountry(country || 'RU')}
                        isLightTheme={false}
                        withBorder={true}
                      />
                      {error && selectedCountry === 'RU' && (
                        <FormHelperText error className="md:ml-3">
                          {error.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />

                <Controller
                  name="mail"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        fullWidth
                        placeholder="Ваш email"
                        type="email"
                        value={field.value}
                        onChange={field.onChange}
                        error={!!error}
                        sx={textFieldStyles}
                        slotProps={{
                          input: {
                            className: 'bg-[#262d37] !rounded-2xl !text-white',
                            startAdornment: (
                              <Box className="mr-2">
                                <HiOutlineMail size={20} color="white" />
                              </Box>
                            ),
                          },
                        }}
                      />
                      {error && <FormHelperText error>{error.message}</FormHelperText>}
                    </>
                  )}
                />

                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={field.value}
                            onChange={field.onChange}
                            sx={{
                              color: error?.message ? '#d32f2f' : '#0ea5e9',
                              '&.Mui-checked': {
                                color: '#0ea5e9',
                              },
                            }}
                          />
                        }
                        label={
                          <Typography variant="caption" className="text-body-sm">
                            Нажав кнопку &quot;Получить скидку 10%&quot;, вы даете согласие на
                            обработку персональных данных.
                          </Typography>
                        }
                      />
                      {error && <FormHelperText error>{error.message}</FormHelperText>}
                    </>
                  )}
                />

                <Button
                  type="submit"
                  variant="contained"
                  className="btn-text w-full rounded-xl bg-[#3198FF] px-4 py-3 text-white transition-all duration-200 hover:bg-[#2980e6]"
                  sx={{
                    opacity: isValid ? 1 : 0.7,
                    '&:hover': {
                      cursor: isValid ? 'pointer' : 'not-allowed',
                    },
                  }}
                >
                  Получить скидку 10%
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  );
};
