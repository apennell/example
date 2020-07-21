import React from 'react';
import { func, node } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
	/** Button label */
	children: node.isRequired,
	onClick: func,
};

const defaultProps = {
	onClick: null,
};

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  border-radius: 3px;
  border: none;
  color: ${props => props.theme.textColorInverted};
  cursor: pointer;
  font-weight: 700;
  min-height: 56px;
  min-width: 100px;
  padding: 12px;
  text-shadow: none;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
  }

  &:active {
    background-color: ${props => props.theme.primaryColorActive};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.theme.disabledColor};
  }
`;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

/** @component */
export default Button;
