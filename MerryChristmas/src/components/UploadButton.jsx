import styled  from 'styled-components';
import { useRef , useState } from "react";
import Button from '@mui/material/Button';
// import SaveButton from './SaveButton.jsx';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const UploadButton = () =>{
    const selectFile = useRef("");
    const imgRef = useRef();
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
            <Img src={process.env.PUBLIC_URL + '/images/frameImg-removebg-preview.png'} 
                    style={{backgroundImage : `url(${imageSrc})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "contain", }} alt='frame' >
            </Img>
        </div>
        {imageSrc && <Button variant="contained" color="success" onClick={onDownload}>
                저장하기
            </Button>}
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