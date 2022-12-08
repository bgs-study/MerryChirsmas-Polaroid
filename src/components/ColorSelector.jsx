import styled  from 'styled-components';
import { useDispatch } from "react-redux";
import {green,red} from "./Body";

const ColorSelector = () =>{
    const dispatch = useDispatch();
    return <>
        <ComponentContainer>
            <Red name="red" onClick={() => dispatch(red())}></Red>
            <Green name="green" onClick={()=>dispatch(green())}></Green>
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