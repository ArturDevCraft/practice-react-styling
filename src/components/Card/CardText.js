import React from 'react';
import styled from 'styled-components';

const CardTextStyled = styled.p``;

const CardText = ({ children }) => {
	return <CardTextStyled>{children}</CardTextStyled>;
};

export default CardText;
