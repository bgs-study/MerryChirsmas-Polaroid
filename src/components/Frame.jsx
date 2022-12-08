import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import ColorSelector from './ColorSelector';
import styled  from 'styled-components';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import SaveButton from "./SaveButton";


export default function Frame({imageSrc}) {
    const imgRef = useRef();
    const frameUrl = useSelector((state) => state.frameUrl);

    const onDownload = () => {
        const downloadImg = imgRef.current;
        const scale = 2;
        console.log(downloadImg);
        domtoimage
            .toBlob(downloadImg,{
                width: downloadImg.clientWidth * scale,
                height: downloadImg.clientHeight * scale,
                style: {
                    transform: "scale(" + scale + ")",
                    transformOrigin: "top left",
                    width: downloadImg.offsetWidth + "px",
                    height: downloadImg.offsetHeight + "px"
                },
            })
            .then((blob) => {
                saveAs(blob, 'polaroid.png');
            });
    }

    return (
    <>
        <Img ref={imgRef} src={process.env.PUBLIC_URL + frameUrl} imageSrc = {imageSrc} alt='frame'>
        </Img>
        <ColorSelector></ColorSelector>
        {imageSrc && <SaveButton onClick={onDownload} />}
    </>
    )
}

const Img = styled.img `
    height: 400px;
    width: 300px;
    background-image : url(${props => props.imageSrc});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
`;
