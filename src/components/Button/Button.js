import React from 'react';
import { StyledButton } from './Button.styled';
import { ThemeProvider } from 'styled-components';
import { buttonVariants } from '../themes';

const Button = ({ children, variant, size, active, disabled }) => {
	return (
		<ThemeProvider theme={buttonVariants[variant]}>
			<StyledButton size={size} active={active} disabled={disabled}>
				{children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
