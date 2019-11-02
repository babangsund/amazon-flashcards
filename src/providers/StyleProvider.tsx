import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import s, { CreateStyled } from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

type Theme = {
  textColor: string;
  fontFamily: string;
  backgroundColor: string;
  textColors: { [key: string]: string };
  factor: (...args: number[]) => string;
  amazonColors: { [key: string]: string };
};

const FACTOR = 8;

const textColors = {
  black: '#111111',
  white: '#ffffff',
  input: '#1d2834',
};

const amazonColors = {
  info: '#ccc',
  light: '#ddd',
  red: '#dc3545',
  blue: '#007bff',
  pink: '#e83e8c',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray: '#999999',
  primary: '#f90',
  dark: '#1d2834',
  green: '#28a745',
  white: '#ffffff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  orange: '#fd7e14',
  yellow: '#ffc107',
  danger: '#C80C39',
  success: '#008476',
  warning: '#FF7675',
  neutral: '#232F3E',
  secondary: '#00B9F2',
  'gray-dark': '#666666',
};

const theme = {
  textColors,
  amazonColors,
  textColor: amazonColors.white,
  backgroundColor: amazonColors.dark,
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  factor: (...args: number[]) => args.map(x => x * FACTOR + 'px').join(' '),
};

const styles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${theme.textColor};
    font-family: ${theme.fontFamily};
    background-color: ${theme.backgroundColor};
  }
`;

function StyleProvider(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      {props.children}
    </ThemeProvider>
  );
}

export const styled = s as CreateStyled<Theme>;
export default StyleProvider;
