const items = [];

export const addItems = function (item) {
    items.push(item);
    console.log(`You have added ${item}, to the list of items.`);
};

export const removeItems = function (item) {
    items.pop(item);
    console.log(`You have removed ${item} from the list.`);
};

export const listItems = function () {
    console.log("here are all of your items: ");
    for (const item of items) {
        console.log(`${item}`);
    }
};