import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	text-decoration: none;
`;

const BreadcrumbItem = ({ active, href, children }) => {
	return (
		<li>
			{active ? (
				children
			) : (
				<StyledLink href={href} active={active}>
					{children}
				</StyledLink>
			)}
		</li>
	);
};

export default BreadcrumbItem;
