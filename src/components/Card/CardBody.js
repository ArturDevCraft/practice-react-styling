import React from 'react';
import styled from 'styled-components';

const CardBodyStyled = styled.div``;

const CardBody = ({ children }) => {
	return <CardBodyStyled>{children}</CardBodyStyled>;
};

export default CardBody;
