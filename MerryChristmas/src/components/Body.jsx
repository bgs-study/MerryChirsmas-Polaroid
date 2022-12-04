import styled  from 'styled-components';
import { useRef , useState , createContext } from "react";

import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import SaveButton from "./SaveButton.jsx"
import ColorSelector from './ColorSelector.jsx'

export const AppContext = createContext();

const UploadButton = () =>{
    const selectFile = useRef("");
    const imgRef = useRef();
    const [imageSrc, setImageSrc] = useState(null);
    const [frame , setFrame] = useState('/images/red.png');

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

    const onDownload = () => {
        const downloadImg = imgRef.current;
        console.log(downloadImg);
        domtoimage
            .toBlob(downloadImg)
            .then((blob) => {
                saveAs(blob, 'polaroid.png');
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
        <div ref={imgRef} >
            <Img src={process.env.PUBLIC_URL + frame} 
                    style={{backgroundImage : `url(${imageSrc})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "contain", padding: "10px" }} alt='frame' >
            </Img>
        </div>
        <ColorSelector></ColorSelector>

        {imageSrc && <SaveButton onClick={onDownload} />}
        </>
    );

}

const Img = styled.img `
    display : block;
    margin: 50px auto;
    height: 500px;
    width: 350px;
    object-fit: fill;
`

const ButtonForm = styled.div `
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export default UploadButton;