import { Box, Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  orderId?: string;
  title?: string;
  message?: string;
  type?: 'success' | 'error';
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onClose,
  orderId,
  title,
  message,
  type = 'success',
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          style: {
            backgroundImage: `url(/images/bgmodal.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          },
          className:
            '!rounded-2xl !bg-black border-2 border-white [&>*]:rotate-0 md:[&>*]:rotate-0',
        },
      }}
    >
      <Box className="absolute right-4 top-4 z-10 hidden md:block">
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <IoMdClose size={24} />
        </IconButton>
      </Box>

      <DialogContent className="!flex !min-h-[400px] flex-col !items-center !justify-center !p-8 text-center">
        <div className="flex w-full justify-end md:hidden">
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <IoMdClose size={32} />
          </IconButton>
        </div>
        <div className="mb-6">
          <img src="/images/logo.webp" alt="ПетроЭнергоМаш" className="h-12 w-auto" />
        </div>

        <div className="mb-6">
          <Button
            variant="contained"
            className={`!rounded-full !px-6 !py-2 !text-sm !font-medium !text-white ${
              type === 'success'
                ? '!bg-[#3198FF] hover:!bg-[#2980e6]'
                : '!bg-red-500 hover:!bg-red-600'
            }`}
            startIcon={<span>{type === 'success' ? '✓' : '⚠'}</span>}
          >
            {type === 'success' ? 'Готово!' : 'Ошибка!'}
          </Button>
        </div>

        <Typography variant="h4" className="!mb-4 !text-2xl !font-bold !text-white md:!text-3xl">
          {type === 'success' && orderId && (
            <>
              <span className="text-[#3198FF]">#{orderId}</span>
              <br />
              успешно оформлен!
            </>
          )}
          {type === 'error' && title && title}
        </Typography>

        <Typography
          variant="body1"
          className="!text-base !leading-relaxed !text-gray-300 md:!text-lg"
        >
          {type === 'success' && !message && (
            <>
              Мы свяжемся с вами в течение
              <br />
              <span className="!font-semibold">30 минут</span> для подтверждения.
            </>
          )}
          {message && message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};
