import styled  from 'styled-components';
import { useRef , useState } from "react";
import SaveButton from './SaveButton.jsx';
import Frame from "./Frame.jsx"

const UploadButton = () =>{
    const selectFile = useRef("");
    const [imageSrc, setImageSrc] = useState(null);
    const [frame , setFrame] = useState("./Frame1.jpg");


    const onUploadImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve,reject) => {
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
            <button onClick={() => selectFile.current.click()}>파일 업로드</button>
        </ButtonForm>
        
        {/* public 경로 */}
        <Img src={process.env.PUBLIC_URL + '/images/frameImg-removebg-preview.png'} 
                style={{backgroundImage : `url(${imageSrc})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "contain", }} alt='frame' >
        </Img>
        {imageSrc && <SaveButton></SaveButton>}
        </>
    );

}

const Img = styled.img `
    display : block;
    margin: 50px auto;
    height: calc(450px/4*3);
    width: calc(250px/4*3);
    object-fit: fill;
`

const ButtonForm = styled.div `
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export default UploadButton;