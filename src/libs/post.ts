import { ItemProps } from "../interfaces";

export const post = async (url: string, postData: any) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
