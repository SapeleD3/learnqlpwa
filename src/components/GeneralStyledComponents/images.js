import styled from 'styled-components';

export const NotFoundLogo = styled.img`
	position: fixed;
	top: 35%;
	left: 50%;
	width: 50%;
	transform: translate(-50%, -50%);
`;

export const LoginImage = styled.img`
	margin: 0;
	width: ${({size}) => size};
	${({Mstyles}) => Mstyles};
`;
