import React from 'react';
import { node, oneOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme1 = {
  primaryColor: 'hotpink',
  primaryColorHover: 'rebeccapurple',
  primaryColorActive: 'hotpink',
  disabledColor: '#CCCCCC',
  textColor: '#404040',
  textColorInverted: '#FFFFFF',
};

const theme2 = {
  primaryColor: 'rebeccapurple',
  primaryColorHover: 'hotpink',
  primaryColorActive: 'rebeccapurple',
  disabledColor: '#CCCCCC',
  textColor: '#404040',
  textColorInverted: '#FFFFFF',
};

const propTypes = {
  brand: oneOf(['brand1', 'brand2']).isRequired,
  children: node.isRequired,
};

const Provider = ({ brand, children }) => {
  const theme = brand === 'brand1' ? theme1 : theme2;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = propTypes;

export default Provider;
