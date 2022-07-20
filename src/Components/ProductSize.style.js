import styled from 'styled-components'

export const Box = styled.div`
width: 24px;
height: 24px;
border: 1px solid black;
margin: 0 0.25rem;
padding: 0;
align-items: center;
display:flex;
justify-content:center;
background-color: ${props => (props.clicked ? 'black' : 'none')};
color: ${props => (props.clicked ? 'white' : 'black')};
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
`