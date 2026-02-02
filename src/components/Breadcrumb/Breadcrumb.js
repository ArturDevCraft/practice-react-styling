import React from 'react';
import styled from 'styled-components';

const StyledBreadcrumb = styled.nav``;
const StyledBreadcrumbOl = styled.ol`
	color: #6c757d;
	display: flex;
	flex-wrap: wrap;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;
	list-style: none;
	background-color: #e9ecef;
	border-radius: 0.25rem;
	li::after {
		content: '/';
		padding: 0 0.37rem;
	}
	li:last-child::after {
		content: '';
	}
`;

const Breadcrumb = ({ children }) => {
	return (
		<StyledBreadcrumb aria-label="breadcrumb">
			<StyledBreadcrumbOl>{children}</StyledBreadcrumbOl>
		</StyledBreadcrumb>
	);
};

export default Breadcrumb;
