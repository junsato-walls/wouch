import * as React from 'react';
import styled from 'styled-components'

const Button = styled.button`
	background-color: ${({ theme }) => (theme && theme.background) || "#00ccff"};
	border-radius:10px;
	cursor: ${({ isDisabled }) => (isDisabled ? "cursor" : "pointer")};
	color: ${({ theme }) => (theme && theme.color) || "#333333"};
	font-size: ${({ size }) => (size && size.fontSize) || "2.5vw"};
	outline: none;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
    width: 25%;
	pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
	user-select: none;
	writing-mode: horizontal-tb;
`;

export default Button