import styled from 'styled-components';

export const IntroTexts = styled.h1`
	color: ${({theme}) => theme.text};
	text-align: center;
`;

export const H4 = styled.h4`
	color: ${({theme}) => theme.text};
	text-align: center;
	font-size: ${({size}) => size};
	font-weight: 'bold';
`;

export const H2 = styled.h2`
	color: ${({theme}) => theme.text};
	font-size: ${({size}) => size};
	text-align: center;
`;

export const P = styled.p`
	color: '#0000EE';
	text-align: center;
`;
