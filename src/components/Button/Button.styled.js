import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs((props) => ({
	'data-active': props.active,
	disabled: props.disabled,
	'data-lg': props.size === 'lg' ? true : undefined,
}))`
	border-radius: 0.25rem;
	display: inline-block;
	padding: 0.375rem 0.75rem;
	cursor: pointer;
	${(props) => props.theme?.styles}
`;

export { StyledButton };
