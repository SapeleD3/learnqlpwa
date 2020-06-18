import styled from 'styled-components';

export const DetailInput = styled.input`
	border: 2px solid ${({theme}) => theme.text};
	width: 100%;
	height: 48px;
	padding: 20px;
	background: 'white';
	margin-bottom: 25px;

	::placeholder,
	::-webkit-input-placeholder {
		font-family: 'Comfortaa', cursive;
	}
`;
