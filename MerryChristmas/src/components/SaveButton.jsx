import styled  from 'styled-components';
import Button from '@mui/material/Button';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const SaveButton = () =>{
    return (
        <ButtonContiner>
            <Button variant="contained" color="success" >
                저장하기
            </Button>
        </ButtonContiner>
    );
}

const ButtonContiner = styled.div`
    margin: 40px auto;
`
;export default SaveButton;