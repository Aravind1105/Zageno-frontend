import { ItemProps } from "../interfaces";

export const put = async (url: string, putData: ItemProps) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
