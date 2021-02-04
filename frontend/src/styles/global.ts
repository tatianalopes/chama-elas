import { createGlobalStyle } from 'styled-components';

import colors from '../resources/values/colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: ${colors.background};
    }

    body, input, button {
        font-family: 'BenchNine';
        font-size: 18px;
    }
`;