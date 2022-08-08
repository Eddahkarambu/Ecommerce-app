import styled from "styled-components";

export const BoxColor = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid black;
  margin: 0 0.25rem;
  padding: 0;
  color: black;
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => (props.clicked ? "0px 0px 0px  2px blue" : "none")};
`;
