import styled from 'styled-components';

export const LayoutContentWrapper = styled.div`
	padding: 0px;
	overflow: hidden;

	@media only screen and (max-width: 767px) {
		padding: 0px;
	}

	@media (max-width: 580px) {
		padding: 0;
	}
`;

export const LayoutContent = styled.div`
	width: 100%;
	padding: 35px;
	border-radius: 0.75rem;
	height: 100%;
	background-color: #fff;
	margin-top: 16px;
`;
