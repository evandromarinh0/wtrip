import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "600": "#47585B",
      "700": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#F5F8FA",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600'
      }
    }
  }
});