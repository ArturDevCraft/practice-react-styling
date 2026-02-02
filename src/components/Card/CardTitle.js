import React from 'react';
import styled from 'styled-components';

const CardTitleStyled = styled.h5``;

const CardTitle = ({ children }) => {
	return <CardTitleStyled>{children}</CardTitleStyled>;
};

export default CardTitle;
