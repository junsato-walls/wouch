import * as React from 'react';
import styled from 'styled-components'

const Hedder = styled.div`
	background-color: ${({ theme }) => (theme && theme.background) || "lightgray"};

    // top: 0;
    // left: 0;
    width: 100%;
`;

export default Hedder