import styled  from 'styled-components';
import { useMemo } from "react";

const Title = (props) =>{
    const palette = ['red','green'];
    const name = props.name.split("");
    // useMemo를 사용해 색상적용할려고 했지만 콜백안에서 훅을 사용할 수 없음
    const nameList =  name.map((n,index)=> {
        const evenOrodd = index % 2;
        return <span key={index} style={{color : palette[evenOrodd]}}>{n}</span>
    })
    return (
        <>
            <TitleContainer>{nameList}</TitleContainer>
        </>
    );
}
const TitleContainer = styled.h1`
    font-size : 5rem;
`;

export default Title;