export async function getItems(){
    const request = await fetch("https://nodejs-mongo-express-crud.vercel.app/products");
    const items = await request.json();
    return items;
}

export async function getLatestItems(){
    const items = await getItems();

    return items.slice(0, 3);
}