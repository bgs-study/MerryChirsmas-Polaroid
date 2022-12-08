import styled  from 'styled-components';


const Title = (props) =>{
    const palette = ['red','green'];
    const name = props.name.split("");
    
    const nameList =  name.map((n,index)=> {
        const evenOrodd = index % 2;
        return <span key={index} style={{color : palette[evenOrodd]}}>{n}</span>
    })
    
    return (
        <>
            <TitleContainer>{nameList}</TitleContainer>
        </>
    );
}

const TitleContainer = styled.div`
    font-size : 5rem;
    margin-bottom : 30px;
`;

export default Title;