import styled  from 'styled-components';
import { useRef , useState } from "react";
import Frame from './Frame';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    frameUrl: '/images/red.png',
};

const urlSlice = createSlice({
    name: 'frameUrl',
    initialState,
    reducers: {
        green(state) {
            state.frameUrl = '/images/green.png';
        },
        red(state) {
            state.frameUrl = '/images/red.png';
        },
    }
});

const store = configureStore({ reducer: urlSlice.reducer });
export const {green,red} = urlSlice.actions;

const UploadButton = () =>{
    const selectFile = useRef("");
    const [imageSrc, setImageSrc] = useState(null);

    const onUploadImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    return (
        <>
        <ButtonForm>      
            <input
                type="file"
                style={{ display: "none" }}
                ref={selectFile} //input에 접근 하기위해 useRef사용
                onChange={e => onUploadImage(e.target.files[0])}
            />
            <Button onClick={() => selectFile.current.click()}>파일 업로드</Button>
        </ButtonForm>

        <Provider store={store}>
            <Frame imageSrc={imageSrc}> </Frame>
        </Provider>
        </>
    );
}


const ButtonForm = styled.div `
    margin:20px;
`;

const Button = styled.button`
    width:100px;
    height:40px;
    font-size: 0.8rem;
    color : white;
    background-color: red;
    border-radius: 10px;
}`;


export default UploadButton;