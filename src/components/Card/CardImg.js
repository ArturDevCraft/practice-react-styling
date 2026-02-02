import React from 'react';
import styled from 'styled-components';

const CardImgStyled = styled.img`
	${({ variant }) =>
		variant === 'top' &&
		`
            flex-shrink: 0;
            width: 100%;
            border-top-left-radius: calc(.25rem - 1px);
            border-top-right-radius: calc(.25rem - 1px);
    `}
	${({ variant }) =>
		variant === 'bottom' &&
		`
            flex-shrink: 0;
            width: 100%;
            border-bottom-left-radius: calc(.25rem - 1px);
            border-bottom-right-radius: calc(.25rem - 1px);
    `}
`;

const CardImg = ({ variant, src }) => {
	return <CardImgStyled src={src} variant={variant} />;
};

export default CardImg;
