export interface ItemProps {
  _id?: string;
  name: string;
  quantity: string;
  checked: boolean;
}

export interface ShoppingList {
  _id?: string;
  name: string;
  items: ItemProps[];
  createdAt: string;
}

export interface newListProps {
  name: string;
  createdAt: string;
}

export interface newItemProps {
  name: string;
  quantity: string;
  checked: boolean;
}
