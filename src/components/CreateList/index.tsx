import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants";
import { addList } from "../../services/query";
import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalBody,
  Button,
  Input,
} from "./styles";

type ListProps = {
  setModal: (val: boolean) => void;
};

declare module "react" {
  interface HTMLAttributes<T> {
    readonly isCancel?: boolean;
  }
}

const CreateList: FC<ListProps> = ({ setModal }) => {
  const [listName, setListName] = useState<string>("");
  const navigate = useNavigate();

  const handleNewList = async () => {
    const payload = {
      name: listName,
      createdAt: new Date().toLocaleString(),
    };
    const response = await addList(payload);

    if (response && !response.error) {
      navigate(`${Paths.LIST_BY_ID}/${response._id}`);
    }
  };

  return (
    <Modal>
      <ModalDialog>
        <ModalHeader>Create List</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Enter List Name"
            value={listName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setListName(e.target.value)
            }
          />
          <Button isCancel={false} disabled={!listName} onClick={handleNewList}>
            Create
          </Button>
          <Button isCancel={true} onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalBody>
      </ModalDialog>
    </Modal>
  );
};

export default CreateList;
