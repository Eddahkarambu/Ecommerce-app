import styled from 'styled-components'

export const BoxColor = styled.div`
width: 20px;
height: 20px;
border: 1px solid black;
margin: 0 0.25rem;
padding: 0;
color: black;
background-color: ${props => props.color};


`