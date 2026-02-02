import React from 'react';
import styled from 'styled-components';

const CardTextStyled = styled.p`
	line-height: 1.5;
	unicode-bidi: isolate;
`;

const CardText = ({ children }) => {
	return <CardTextStyled>{children}</CardTextStyled>;
};

export default CardText;
