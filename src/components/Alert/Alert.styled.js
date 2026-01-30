import styled from 'styled-components';

const StyledAlert = styled.div`
	border-radius: 0.25rem;
	display: block;
	margin-bottom: 1rem;
	padding: 0.75rem 1.25rem;
	${(props) => props.theme?.styles}
`;

export { StyledAlert };
