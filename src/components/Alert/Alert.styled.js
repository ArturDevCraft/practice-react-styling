import styled from 'styled-components';

const StyledAlert = styled.div`
	display: block;
	padding: 0.75rem 1.25rem;
	border-radius: 0.25rem;
	${(props) => props.theme?.styles}
`;

export { StyledAlert };
