import React from 'react';
import styled from 'styled-components';

const CardImgStyled = styled.img``;

const CardImg = ({ variant, src }) => {
	return <CardImgStyled src={src} variant={variant} />;
};

export default CardImg;
