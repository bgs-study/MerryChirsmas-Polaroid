import styled  from 'styled-components';
import Button from '@mui/material/Button';


const SaveButton = ({onClick}) =>{
    return (
        <ButtonContiner>
            <Button variant="contained" color="success" onClick = {onClick}>
                저장하기
            </Button>
        </ButtonContiner>
    );
}

const ButtonContiner = styled.div`
    margin: 40px auto;
`
export default SaveButton;