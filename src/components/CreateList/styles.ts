import styled from "styled-components";

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

export const ModalDialog = styled.div`
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  text-align: center;
  z-index: 11;
  width: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    width: 270px;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
`;

export const ModalHeader = styled.div`
  padding: 10px 20px;
  border-bottom: #eeeeee solid 1px;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 80%;
`;

export const Button = styled.button`
  color: white;
  border: 0;
  text-align: center;
  padding: 14px;
  margin: 10px;
  width: 100px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ isCancel }) => (!isCancel ? "dodgerblue" : "gray")};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
