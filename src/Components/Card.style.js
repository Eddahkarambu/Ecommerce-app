import styled from "styled-components";

export const IconCart = styled.div`
  background: green;
  width: 52px;
  height: 52px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  bottom: 70px;
  right: 30px;
`;

export const CardWrapper = styled.div`
  width: 386px;
  height: 444px;
  background: white;
  position: relative;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${IconCart} {
    display: flex;
  }
`;

export const CardImage = styled.img`
  padding: 16px;
  width: 354px;
  height: 330px;
`;

export const CardContent = styled.div`
  padding: 0 16px;
`;

export const ProductName = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #1d1f22;
`;
export const ProductPrice = styled(ProductName)`
  font-weight: 500;
`;

export const Order = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background: white;
  opacity: 0.5;
`;

export const CartIcons = styled.img`
  width: 20px;
  height: 20px;
`;
