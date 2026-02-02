import React from 'react';
import styled from 'styled-components';

const TabBodyItemStyled = styled.div`
	&[data-hidden='true'] {
		display: none;
	}
`;

const TabBodyItem = ({ children, hidden }) => {
	return <TabBodyItemStyled data-hidden={hidden}>{children}</TabBodyItemStyled>;
};

export default TabBodyItem;
