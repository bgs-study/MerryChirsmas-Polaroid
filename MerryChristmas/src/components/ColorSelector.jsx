import styled  from 'styled-components';

const ColorSelector = (props) =>{
    //상태관리를 가져와서 사용 할 수 없을까?
    console.log(props.setFrame)
    return <>
        <ComponentContainer>
            <Red  color = "red"> </Red>
            <Green color="green" ></Green>
        </ComponentContainer>
    </>
}

const Component = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius : 10px;
    & ~ & {
        margin: 30px 10px;
    } 
`;
const Red = styled(Component)`
    background-color: red
`;
const Green = styled(Component)`
    background-color: green
`;

const ComponentContainer = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    
    
`;
export default ColorSelector;