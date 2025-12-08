import { Box, styled } from '@mui/material';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const StyledPhoneBox = styled(Box, {
  shouldForwardProp: prop => prop !== '$isLightTheme',
})<{ $isLightTheme?: boolean }>`
  padding: 16.5px 14px;
  border: none !important;
  outline: none !important;

  & .PhoneInput {
    border: none !important;
    outline: none !important;
  }

  & .PhoneInputInput {
    border: none !important;
    outline: none !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  & input {
    border: none !important;
    outline: none !important;
    background: transparent !important;
    box-shadow: none !important;
    color: #ffffff !important;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #262d37 inset !important;
      -webkit-text-fill-color: #ffffff !important;
      background-color: transparent !important;
    }

    &::placeholder {
      color: ${props =>
        props.$isLightTheme ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'} !important;
    }
  }
`;

interface PhoneMaskCustomProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  onCountryChange?: (country: string | undefined) => void;
  isLightTheme?: boolean;
}

export const PhoneMaskCustom: React.FC<PhoneMaskCustomProps> = ({
  value,
  onChange,
  onCountryChange,
  isLightTheme = true,
}) => {
  return (
    <StyledPhoneBox $isLightTheme={isLightTheme} className="rounded-2xl bg-[#262d37]">
      <PhoneInput
        id="phone"
        value={value}
        onChange={value => {
          onChange(value || '');
        }}
        onCountryChange={onCountryChange}
        defaultCountry="RU"
        international
        countryCallingCodeEditable={false}
        placeholder="Ваш телефон *"
      />
    </StyledPhoneBox>
  );
};
