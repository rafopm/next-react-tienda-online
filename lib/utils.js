import { getItems } from "../services/ItemService";

export async function getPathFromIds() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title), //cada id
      },
    };
  });

  return ids;
}

export async function getItemsData(id){
    const items = await getItems();

    const product = items.find((item) => convertToPath(item.title) === id);

    return {
        id: id,
        data: product,
    };
}

export function convertToPath(title){
    return title.toLowerCase().replace(/\s/g, "-")
}