import React from 'react';
import styled from 'styled-components';
const TabNavContainerStyled = styled.nav`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	border-bottom: 1px solid #dee2e6;
`;

const TabNavContainer = ({ children }) => {
	return <TabNavContainerStyled>{children}</TabNavContainerStyled>;
};

export default TabNavContainer;
