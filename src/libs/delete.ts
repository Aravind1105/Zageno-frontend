export const del = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
