import styled  from 'styled-components';
import { useRef , useState } from "react";


const Frame = ({src}) =>{
    console.log(src);
    return (<><img src={src} alt="frame"></img></>);
}

export default Frame;