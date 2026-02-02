import React from 'react';
import styled from 'styled-components';

const CardTitleStyled = styled.h5`
	display: block;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: 500;
	line-height: 1.2;
`;

const CardTitle = ({ children }) => {
	return <CardTitleStyled>{children}</CardTitleStyled>;
};

export default CardTitle;
