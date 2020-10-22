import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    height: 40px;
    padding: 5px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 400px) {
    height: 50px;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    width: 30px;
    padding: 0;
  }

  @media screen and (max-width: 400px) {
    width: 10px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50% auto;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 80%; 
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    width: 90%; 
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 20px;

  @media screen and (max-width: 800px) {
    padding: 10px 40px; 
  }

  @media screen and (max-width: 600px) {
    padding: 10px 30px; 
  }

  @media screen and (max-width: 400px) {
    padding: 10px 15px; 
  }
`;

