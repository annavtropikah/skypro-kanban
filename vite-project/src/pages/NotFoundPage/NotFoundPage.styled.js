import styled from 'styled-components';



export const ContainerNotFound = styled.div`
width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:100px;
    
`;
export const TextxNotFound = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color:darkgray;

& p {
 text-align:left;
 padding-left:20px;
 font-weight:600;
}
& a {
    color:darkgreen;
    padding-left:20px;
    font-weight:600;
}

`;