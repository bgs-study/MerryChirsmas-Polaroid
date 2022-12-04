import styled  from 'styled-components';
import Title from "./Title.jsx"

const Header = () =>{
    const informs = ["크리스마스 폴라로이드 꾸미기를 즐겨보세요", "다양한 테마와 색상을 바꿀 수 있어요!"];
    const informsList = informs.map((inform,index) => (<InfoContainer key={index}>{inform}</InfoContainer>))
    return (
        <>
            <Title name ="MerryChrismas"></Title>
            {informsList}
        </>
    );
}

const InfoContainer = styled.p`
    color : white;
    font-size : 1rem;
`;

export default Header;