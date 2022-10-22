import * as React from 'react';
import styled from 'styled-components'

const Button = styled.button`
	background-color: ${({ theme }) => (theme && theme.background) || "lightgray"};
	border: none;
	border-radius: 0.6vmin;
	cursor: ${({ isDisabled }) => (isDisabled ? "cursor" : "pointer")};
	color: ${({ theme }) => (theme && theme.color) || "#333333"};
	font-size: ${({ size }) => (size && size.fontSize) || "2.0em"};
	outline: none;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
	padding: ${({ size }) => (size && size.fontSize) || "5em 7em"};
    width: 50%;
    min-width: 200px;
    max-width: 300px;
	pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
	user-select: none;
`;

export default Button