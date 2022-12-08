import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @media all and (max-width: 750px) {
        Button { 
            width : 10vw ; 
            min-width : 80px;
            font-size:  50%;
        }
    }
`;
