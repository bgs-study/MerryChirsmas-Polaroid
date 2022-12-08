import styled  from 'styled-components';
import Title from "./Title.jsx"
import Body from './Body.jsx';

Polaroid.defaultProps = {
    title : "MerryChrismas",
    description:["크리스마스 폴라로이드 꾸미기를 즐겨보세요", "다양한 테마와 색상을 바꿀 수 있어요!"]
};

export default function Polaroid({title,description}) {
    const informsList = description.map((inform,index) => (<InfoContainer key={index}>{inform}</InfoContainer>))
    return (
        <>  
            <Title name = {title}></Title>
            {informsList}
            <Body></Body>
        </>
    );
}

const InfoContainer = styled.p`
    color : white;
    font-size : 1.2rem;
    margin : 10px;
    & + &{
        margin-bottom : 30px;
    }
`;