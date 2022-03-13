import { ItemProps, newListProps, ShoppingList } from "../interfaces";
import { del } from "../libs/delete";
import { get } from "../libs/get";
import { post } from "../libs/post";
import { put } from "../libs/put";
import { urlBuilder } from "./urlBuilder";

export const getAllLists = async (): Promise<ShoppingList[]> => {
  const url: string = new urlBuilder()
    .path("api/getAllLists")
    .noParams()
    .build();

  try {
    const response: ShoppingList[] = await get(url);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const ListById = async (id: string) => {
  const url: string = new urlBuilder()
    .path(`api/list/${id}`)
    .noParams()
    .build();

  try {
    const response: ShoppingList = await get(url);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addList = async (list: newListProps) => {
  const url: string = new urlBuilder()
    .path(`api/createList`)
    .noParams()
    .build();

  try {
    const response = await post(url, list);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateItem = async (listId: string, item: ItemProps) => {
  const url: string = new urlBuilder()
    .path(`api/updateItem/${listId}`)
    .noParams()
    .build();

  try {
    const response = await put(url, item);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addItem = async (listId: any, item: ItemProps) => {
  const url: string = new urlBuilder()
    .path(`api/addItem/${listId}`)
    .noParams()
    .build();

  try {
    const response = await post(url, item);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (listId: string, itemId: string) => {
  const url: string = new urlBuilder()
    .path(`api/deleteItem/${listId}/${itemId}`)
    .noParams()
    .build();

  try {
    const response = await del(url);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
