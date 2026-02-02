import React from 'react';
import styled from 'styled-components';

const TabNavItemStyled = styled.a.attrs({
	href: '#',
})`
	cursor: pointer;
	color: #007bff;
	display: block;
	padding: 0.5rem 1rem;
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	text-decoration: none;
	:hover {
		text-decoration: none;
		border-color: #e9ecef #e9ecef #dee2e6;
	}
	margin-bottom: -1px;
	&[data-selected='true'] {
		color: #495057;
		background-color: #fff;
		border-color: #dee2e6 #dee2e6 #fff;
	}
	&[disabled] {
		color: gray;
		:hover {
			color: gray;
			cursor: default;
		}
	}
`;

const TabNavItem = ({ children, selected, onClick, disabled }) => {
	const clickHandler = disabled ? null : onClick;
	return (
		<TabNavItemStyled
			data-selected={selected}
			onClick={clickHandler}
			disabled={disabled}
		>
			{children}
		</TabNavItemStyled>
	);
};

export default TabNavItem;
