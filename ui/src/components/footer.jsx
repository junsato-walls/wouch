import * as React from 'react';
import styled from 'styled-components'

const Footer = styled.div`
	background-color: ${({ theme }) => (theme && theme.background) || "lightgray"};
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export default Footer