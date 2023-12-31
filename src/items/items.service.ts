
/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import { items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Chessy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};


/**
 * Service Methods
 */

export const findAll = async () : Promise<Item[]> => Object.values(items);

export const find = async (id: number) : Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {};

export const update = async (
    id: number,
    itemupdate: BaseItem
): Promise<Item | null> => {

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete items[id];
};
    const item = await find(id);

    if (!item) {
        return null;
    }

    items[id] = { id, ...itemupdate};

    return items[id];
};