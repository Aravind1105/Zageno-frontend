import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export const MainCard = styled.div`
  box-shadow: 0 4px 15px, 0 0 0 8px #ffffffeb;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  width: 50%;
`;

export const CardList = styled.div`
  box-shadow: 0 4px 10px, 0 0 0 8px #ffffffeb;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  display: block;
  width: 80px;
  height: 80px;
  line-height: 75px;
  border: 2px solid #f5f5f5;
  border-radius: 50%;
  font-size: 90px;
  float: right;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  padding: 30px;
  white-space: pre-wrap;
  line-height: 35px;
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

export const Text = styled.span`
  font-size: 18px;
`;
