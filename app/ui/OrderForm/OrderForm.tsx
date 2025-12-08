import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  FormHelperText,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { OrderFormType } from '../../contexts/OrderFormContext';
import { lightTextFieldStyles } from '../../helpers';
import { PhoneMaskCustom } from './components/PhoneMaskCustom';
import { SuccessModal } from './components/SuccessModal';
import { schema } from './hookform';
import { VisuallyHiddenInput } from './style';

interface OrderFormProps {
  open: boolean;
  onClose: () => void;
  formType: OrderFormType;
}

interface FormValues {
  name: string;
  telephone: string;
  mail: string;
  message: string;
  agreeToTerms: boolean;
  files: File[];
}

export const OrderForm: React.FC<OrderFormProps> = ({ open, onClose, formType }) => {
  const [selectedCountry, setSelectedCountry] = useState('RU');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    handleSubmit,
    control,
    formState: { isValid },
    watch,
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      telephone: '',
      mail: '',
      message: '',
      agreeToTerms: false,
      files: [],
    },
  });

  const files = watch('files');

  const [showAllFiles, setShowAllFiles] = useState(false);
  const [notificationModal, setNotificationModal] = useState({
    open: false,
    type: 'success' as 'success' | 'error',
    orderId: '',
    title: '',
    message: '',
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleNotificationClose = () => {
    setNotificationModal({
      open: false,
      type: 'success',
      orderId: '',
      title: '',
      message: '',
    });
    if (notificationModal.type === 'success') {
      onClose();
    }
  };

  const canSubmitForm = (): boolean => {
    const lastSubmitTime = localStorage.getItem('lastFormSubmitTime');

    if (lastSubmitTime) {
      const timeDifference = Date.now() - parseInt(lastSubmitTime);
      return timeDifference > 30000;
    }

    return true;
  };

  const onSubmit = async (data: FormValues) => {
    if (!canSubmitForm()) {
      setNotificationModal({
        open: true,
        type: 'error',
        orderId: '',
        title: 'Слишком часто!',
        message: 'Вы не можете отправлять заявки чаще, чем раз в 30 секунд. Пожалуйста, подождите.',
      });
      return handleClose();
    }

    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (key !== 'files') {
        formData.append(key, String(data[key as keyof FormValues]));
      }
    });

    formData.append('formType', formType);

    if (data.files && data.files.length > 0) {
      data.files.forEach((file: File) => {
        formData.append('files', file);
      });
    }

    try {
      const response = await fetch(import.meta.env.VITE_BOT_API, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('lastFormSubmitTime', Date.now().toString());

        setNotificationModal({
          open: true,
          type: 'success',
          orderId: `${result.orderId}`,
          title: '',
          message: '',
        });
        reset();
      }
    } catch {
      setNotificationModal({
        open: true,
        type: 'error',
        orderId: '',
        title: 'Ошибка отправки',
        message:
          'Произошла ошибка при отправке заявки. Попробуйте снова или напишите нам на почту.',
      });
      reset();
    }
    handleClose();
  };

  const onDeleteFiles = (index: number) => {
    setValue(
      'files',
      files.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
        slotProps={{
          paper: {
            style: {
              backgroundImage: `url(/images/bgmodal.webp)`,
              overflow: 'hidden',
            },
            className: '!rounded-2xl !bg-[#1B1E29] border-2 border-white',
          },
        }}
      >
        <Box className="absolute right-4 top-4 z-10 hidden md:block">
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <IoMdClose size={32} />
          </IconButton>
        </Box>
        <DialogContent className="!flex !min-h-full flex-col !items-center !justify-start gap-4 !p-4 md:!items-start md:!px-[50px] md:!py-[100px]">
          <div className="flex w-full justify-end md:hidden">
            <IconButton onClick={handleClose} sx={{ color: 'white' }}>
              <IoMdClose size={32} />
            </IconButton>
          </div>

          <div className="mt-16 md:mt-0 md:w-1/2">
            <div className="mb-6 sm:mb-4">
              <Typography variant="h5" className="sm:text-h4 font-bold text-[#d6d6d6]">
                {formType === 'order' ? 'Заказать услугу' : 'Заполните заявку'}
              </Typography>
              <Typography variant="body2" className="sm:text-body1 text-gray-300">
                {formType === 'order'
                  ? 'Отправьте заявку и мы свяжемся с вами'
                  : 'Мы свяжемся с вами в ближайшее время'}
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-4">
              <Box className="flex flex-col justify-center gap-6 md:flex-row md:gap-3">
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
                        sx={lightTextFieldStyles}
                        slotProps={{
                          input: {
                            className: 'bg-white !rounded-2xl',
                            startAdornment: (
                              <Box className="mr-2">
                                <IoPersonOutline size={20} color="rgb(67, 80, 96)" />
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
                      />
                      {error && selectedCountry === 'RU' && (
                        <FormHelperText error className="md:ml-3">
                          {error.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              </Box>

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
                      sx={lightTextFieldStyles}
                      slotProps={{
                        input: {
                          className: '!rounded-2xl bg-white',
                          startAdornment: (
                            <Box className="mr-2">
                              <HiOutlineMail size={20} color="rgb(67, 80, 96)" />
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
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Ваше сообщение"
                    value={field.value}
                    onChange={field.onChange}
                    sx={lightTextFieldStyles}
                    slotProps={{
                      input: {
                        className: '!rounded-2xl bg-white',
                        startAdornment: (
                          <Box className="mr-2 mt-[-45px]">
                            <FiMessageCircle size={20} color="rgb(67, 80, 96)" />
                          </Box>
                        ),
                      },
                    }}
                  />
                )}
              />

              {formType === 'order' && (
                <Controller
                  name="files"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box className="flex flex-col gap-2">
                      <Tooltip
                        title="Поддерживаются форматы: PDF, DXF, DWG, STL, STEP, IGS"
                        arrow
                        placement="top"
                      >
                        <Button
                          component="label"
                          variant="outlined"
                          startIcon={<FaCloudDownloadAlt />}
                          className="w-full justify-center border-blue-500 bg-white py-1 text-xs text-black hover:bg-gray-100 sm:text-sm"
                          size="small"
                          sx={{
                            borderColor: '#3198FF',
                            borderWidth: '1px',
                            '&:hover': {
                              borderColor: '#1d80e2',
                              borderWidth: '1px',
                              bgcolor: '#f0f7ff',
                            },
                          }}
                        >
                          {field.value && field.value.length > 0
                            ? 'Файлов: ' + field.value.length
                            : 'Загрузить файлы'}
                          <VisuallyHiddenInput
                            type="file"
                            multiple
                            accept=".pdf,.dxf,.dwg,.stl,.step,.igs"
                            onChange={e => {
                              const fileList = e.target.files;
                              if (fileList) {
                                const allowedExtensions = [
                                  'pdf',
                                  'dxf',
                                  'dwg',
                                  'stl',
                                  'step',
                                  'igs',
                                ];
                                const filesArray = Array.from(fileList).filter(file => {
                                  const ext = file.name.split('.').pop()?.toLowerCase() || '';
                                  return allowedExtensions.includes(ext);
                                });

                                if (filesArray.length !== fileList.length) {
                                  setNotificationModal({
                                    open: true,
                                    type: 'error',
                                    orderId: '',
                                    title: 'Неподдерживаемые файлы',
                                    message:
                                      'Некоторые файлы не были добавлены. Поддерживаются только PDF, DXF, DWG, STL, STEP, IGS.',
                                  });
                                }

                                field.onChange([...field.value, ...filesArray]);
                              }
                            }}
                          />
                        </Button>
                      </Tooltip>
                      {error && (
                        <FormHelperText error className="md:ml-3">
                          {error.message}
                        </FormHelperText>
                      )}
                    </Box>
                  )}
                />
              )}

              {files && files.length > 0 && formType === 'order' && (
                <Box className="rounded-xl bg-gray-100 p-1 sm:p-2">
                  <Box className="flex flex-wrap gap-1 sm:gap-2">
                    {(showAllFiles ? files : files.slice(0, 2)).map((file, index) => (
                      <Box
                        key={index}
                        className="flex items-center gap-1 rounded-xl bg-white px-1 py-0.5"
                      >
                        <Typography variant="caption" className="font-medium">
                          {file?.name}
                        </Typography>
                        <Typography variant="caption" className="ml-1 text-gray-500">
                          ({(file?.size / 1024).toFixed(0)} КБ)
                        </Typography>
                        <IconButton size="small" onClick={() => onDeleteFiles(index)}>
                          <MdClose size={16} />
                        </IconButton>
                      </Box>
                    ))}
                    {files.length > 2 && (
                      <Box className="flex items-center rounded-full bg-white px-1">
                        <Button size="small" onClick={() => setShowAllFiles(!showAllFiles)}>
                          {showAllFiles ? 'Скрыть' : `... и еще ${files.length - 2}`}
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              )}

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
                            color: 'white',
                            '&.Mui-checked': {
                              color: 'primary.main',
                            },
                          }}
                        />
                      }
                      label={
                        <Typography variant="caption" className="text-[#d6d6d6]">
                          Нажав кнопку &quot;Отправить&quot;, вы даете согласие на обработку
                          персональных данных.
                        </Typography>
                      }
                    />
                    {error && <FormHelperText error>{error.message}</FormHelperText>}
                  </>
                )}
              />

              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  opacity: isValid ? 1 : 0.7,
                  '&:hover': {
                    cursor: isValid ? 'pointer' : 'not-allowed',
                  },
                }}
              >
                Отправить
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
      <SuccessModal
        open={notificationModal.open}
        onClose={handleNotificationClose}
        type={notificationModal.type}
        orderId={notificationModal.orderId}
        title={notificationModal.title}
        message={notificationModal.message}
      />
    </>
  );
};
