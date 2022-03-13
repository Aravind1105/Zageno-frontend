import React, { FC, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ItemProps, newItemProps, ShoppingList } from "../../interfaces";
import {
  addItem,
  deleteItem,
  ListById,
  updateItem,
} from "../../services/query";
import {
  Container,
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
  TableData,
  Checkbox,
  Label,
  DeleteButton,
  AddButton,
  Input,
  Title,
  Wrapper,
  Text,
  ItemWrapper,
} from "./styles";

const SelectedList: FC = () => {
  const [currentList, setCurrentList] = useState<ShoppingList>({
    _id: "",
    name: "",
    items: [],
    createdAt: new Date().toLocaleString(),
  });
  const [newItem, setNewItem] = useState<newItemProps>({
    name: "",
    quantity: "",
    checked: false,
  });

  const params = useParams();

  useEffect(() => {
    getListById(params.listId);
  }, [params.listId]);

  const getListById = async (listId: any) => {
    const response: any = await ListById(listId);
    setCurrentList(response);
  };

  const handleUpdateItem = async (listId: any, item: ItemProps) => {
    const toggleCheckedItem = { ...item };
    toggleCheckedItem.checked = !toggleCheckedItem.checked;
    const response = await updateItem(listId, toggleCheckedItem);

    if (response && !response.error) {
      const list: ShoppingList = { ...currentList };
      list.items = response.items;
      setCurrentList(list);
    }
  };

  const handleDeleteItem = async (listId: any, itemId: any) => {
    const response = await deleteItem(listId, itemId);

    if (response && !response.error) {
      const list: ShoppingList = { ...currentList };
      list.items = response.items;
      setCurrentList(list);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((item) => ({
      ...item,
      [e.target.id]: e.target.value,
    }));
  };

  const handleAddItem = async () => {
    const response = await addItem(currentList._id, newItem);

    if (response && !response.error) {
      const list: ShoppingList = { ...currentList };
      list.items = response.items;
      setCurrentList(list);
      setNewItem((item) => ({
        ...item,
        name: "",
        quantity: "",
      }));
    }
  };
  return (
    <Container>
      <>
        <Title>
          <Wrapper>
            <Label>Name: </Label>
            <Text>{currentList.name}</Text>
          </Wrapper>
          <Wrapper>
            <Label>Created: </Label>
            <Text>{currentList.createdAt}</Text>
          </Wrapper>
        </Title>
        <Table>
          {currentList?.items?.length > 0 ? (
            <TableHead>
              <TableRow>
                <TableHeader>Done</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Delete Item</TableHeader>
              </TableRow>
            </TableHead>
          ) : (
            <Text>
              Your cart is empty now.{"\n"} Have your desired items by adding
              below.
            </Text>
          )}
          {currentList?.items?.map((item: ItemProps, idx) => {
            return (
              <Fragment key={idx}>
                <TableBody>
                  <TableRow>
                    <TableData>
                      <Checkbox
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleUpdateItem(currentList._id, item)}
                      />
                    </TableData>
                    <TableData>
                      <Label>{item.name}</Label>
                    </TableData>
                    <TableData>
                      <Label>{item.quantity}</Label>
                    </TableData>
                    <TableData>
                      <DeleteButton
                        onClick={() =>
                          handleDeleteItem(currentList._id, item._id)
                        }
                      >
                        x
                      </DeleteButton>
                    </TableData>
                  </TableRow>
                </TableBody>
              </Fragment>
            );
          })}
        </Table>
        <Title>Add New Item</Title>
        <ItemWrapper>
          <Input
            type="text"
            id="name"
            placeholder="Enter Item Name"
            value={newItem.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          <Input
            type="text"
            id="quantity"
            placeholder="Enter Quantity"
            value={newItem.quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          <AddButton
            disabled={!newItem.name || !newItem.quantity}
            onClick={handleAddItem}
          >
            Add
          </AddButton>
        </ItemWrapper>
      </>
    </Container>
  );
};

export default SelectedList;
