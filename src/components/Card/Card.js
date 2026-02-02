import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div``;

const Card = ({ children }) => {
	return <CardStyled>{children}</CardStyled>;
};

export default Card;
