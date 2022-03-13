import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../constants";
import { ShoppingList } from "../../interfaces";
import { getAllLists } from "../../services/query";
import CreateList from "../CreateList";
import {
  Container,
  MainCard,
  CardList,
  Button,
  Description,
  Label,
  Text,
  Wrapper,
} from "./styles";

const AllLists: FC = () => {
  const [allList, setAllList] = useState<ShoppingList[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchAllLists = async () => {
    const response: ShoppingList[] = await getAllLists();
    setAllList(response);
  };

  useEffect(() => {
    fetchAllLists();
  }, []);
  return (
    <>
      <Container>
        <MainCard>
          {allList?.length > 0 ? (
            allList.map((list, idx) => {
              return (
                <CardList
                  key={idx}
                  onClick={() => navigate(`${Paths.LIST_BY_ID}/${list._id}`)}
                >
                  <Wrapper>
                    <Label>Name: </Label>
                    <Text>{list.name}</Text>
                  </Wrapper>
                  <Wrapper>
                    <Label>Created: </Label>
                    <Text>{list.createdAt}</Text>
                  </Wrapper>
                </CardList>
              );
            })
          ) : (
            <Description>
              Currently, there are no lists.{"\n"} Click Add icon to create your
              shopping list.
            </Description>
          )}
          <Button onClick={() => setIsModalOpen(true)}>+</Button>
          {isModalOpen && (
            <CreateList setModal={(val: boolean) => setIsModalOpen(val)} />
          )}
        </MainCard>
      </Container>
    </>
  );
};

export default AllLists;
