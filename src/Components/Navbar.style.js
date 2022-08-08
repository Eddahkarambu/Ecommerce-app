import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #white;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const NavLink = styled(Link)`
  width: 65px;
  height: 20px;
  margin-right: 50px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: black;

  &.active {
    color: green;
  }
`;

export const Arrow = styled.div`
  width: 65px;
  height: 20px;
  align-items: center;
  text-align: center;
`;

export const Signs = styled.div`
  height: 20px;
  align-items: center;
  text-align: center;
  display: flex;
`;

export const People = styled.div`
  display: flex;
`;

export const Tools = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
`;

export const Cart = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 1rem;
`;

export const Circle = styled.div`
  background: black;
  width: 15px;
  height: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  position: absolute;
  right: 0;
  bottom: 15px;
  font-size: 12px;
`;

export const CartDetails = styled.div`
  position: relative;
  padding-right: 10px;
`;
