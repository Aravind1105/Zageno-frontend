import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 4px 15px, 0 0 0 8px #ffffffeb;
  padding: 15px;
  margin: 50px auto;
  border-radius: 10px;
  text-align: center;
  width: 50%;
`;

export const Checkbox = styled.input`
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px 10px 5px 5px;
  margin: auto;
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 80%;
  margin: auto;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 25px;
  white-space: pre-wrap;
`;

export const DeleteButton = styled.button`
  border: none;
  background: border-box;
  cursor: pointer;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  font-size: 30px;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: auto;
  &:hover {
    color: red;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  display: block;
  max-width: fit-content;
  overflow-x: auto;
  white-space: nowrap;
`;

export const TableRow = styled.tr``;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  &:nth-child(even) {
    background-color: lightgray;
  }
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`;

export const TableData = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  width: 20%;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 10px;
  max-width: 50%;
`;

export const AddButton = styled.button`
  background: dodgerblue;
  color: white;
  border: 0;
  text-align: center;
  padding: 14px;
  margin: 10px;
  width: 100px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Title = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  width: 60%;
  margin: 20px auto;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  display: block;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;
