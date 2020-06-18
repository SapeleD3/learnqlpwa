import styled from 'styled-components';

export const LoginButtons = styled.button`
	display: flex;
	border: 2px solid ${({theme}) => theme.text};
	width: 100%;
	height: 48px;
	background: ${({theme}) => theme.body};
	margin-bottom: 25px;
`;

export const Lines = styled.div`
	width: 188px;
	height: 4px;
	margin-bottom: 10px;
	background: ${({theme}) => theme.text};
`;
