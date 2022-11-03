import * as React from 'react';
import styled from 'styled-components'

const Button = styled.button`
	background-color: ${({ theme }) => (theme && theme.background) || "lightgray"};
	border: 1px solid #333;
	border-radius: 0.6vmin;
	cursor: ${({ isDisabled }) => (isDisabled ? "cursor" : "pointer")};
	color: ${({ theme }) => (theme && theme.color) || "#333333"};
	font-size: ${({ size }) => (size && size.fontSize) || "2.5em"};
	outline: none;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
	padding: ${({ size }) => (size && size.fontSize) || "1.5em 3em"};
    width: 24%;
	pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
	user-select: none;
	writing-mode: horizontal-tb;
`;

export default Button