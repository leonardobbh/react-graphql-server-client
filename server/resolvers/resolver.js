let DBTODO = require("../db.json");

const getAllItems = () => {
    return DBTODO;
};

const getItem = (args) => {
    const { id } = args;
    return DBTODO.filter((item) => {
        return item.id == id;
    })[0];
};

const addItem = ({ input: { task, description } }) => {
    const numOfItems = DBTODO.length;
    const addItem = {
        id: numOfItems + 1,
        task: task,
        description: description
    };
    DBTODO.push(addItem);

    return addItem;
};

const updateItem = ({ id, input: { task, description } }) => {
    const newDBITEMS = DBTODO.map((item) => {
        if (item.id === id) {
            item.task = (task) ? task : item.task;
            item.description = (description) ? description : item.description;
        }

        return item;
    });

    return newDBITEMS.filter(({ id: todoid }) => todoid === id)[0];
};

const deleteItem = ({ id: deletedId }) => {
    const deletedItem = DBTODO.filter(({ id }) => {
        return id === deletedId;
    });

    DBTODO = DBTODO.slice(
        DBTODO.findIndex(({ id }) => id === deletedItem),
    );

    return deledeletedIdtedItem;
};

const resolvers = {
    item: getItem,
    items: getAllItems,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
};

module.exports = resolvers;