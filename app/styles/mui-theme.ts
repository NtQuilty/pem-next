export const textFieldStyles = {
  '& .MuiInputBase-root': {
    backgroundColor: '#262d37',
    borderRadius: '16px',
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
    '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s',
      WebkitTextFillColor: 'white',
      caretColor: 'white',
      WebkitBoxShadow: '0 0 0 1000px #262d37 inset',
    },
  },
};

export const lightTextFieldStyles = {
  '& .MuiInputBase-root': {
    backgroundColor: '#262d37',
    borderRadius: '16px',
    color: '#333333',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(0, 0, 0, 0.25)' },
    '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
  },
  '& .MuiInputBase-input': {
    color: '#ffffff',
    '&:-webkit-autofill': {
      transition: 'background-color 5000s ease-in-out 0s',
      WebkitTextFillColor: '#ffffff !important',
      caretColor: '#ffffff',
      WebkitBoxShadow: '0 0 0 1000px #262d37 inset',
    },
  },
};
