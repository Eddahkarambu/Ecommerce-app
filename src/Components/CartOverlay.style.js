import styled from 'styled-components'

export const Overlay = styled.div`
background-color: white;
position: relative;
margin-right: 5%;
cursor: pointer;
z-index: 9;
padding: 32px 16px;
width: 325px;
height: fit-content;
`

export const FragmentOverlay = styled.div`
background-color: rgba(57, 55, 72, 0.22);
right: 0;
left:0;
top:0;
bottom:0;
z-index: 1;
position: fixed;
display: flex;
justify-content: flex-end;
top: 60px;
width: 100%;
height:100%;
`

export const Costs = styled.div`
display:flex;
justify-content:space-between;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
`

export const CheckoutButtons = styled.div`
display:flex;
justify-content:space-between;
margin-top:1rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;

`
export const Button1 = styled.button`
background-color:white;
Padding:16px 32px;
border: 1px solid #1D1F22;

`
export const Button2 = styled.button`
background-color:green;
Padding:16px 32px;
color:white;
border: 1px solid #1D1F22;
`





