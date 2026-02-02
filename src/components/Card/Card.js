import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	${(props) => props.style}
`;

const Card = ({ children, style }) => {
	return <CardStyled style={style}>{children}</CardStyled>;
};

export default Card;
