const { buildSchema } = require('graphql');

const todoSchema = buildSchema(`
    type Query {
        item(id: Int!): Item
        items: [Item]
    }

    type Mutation {
        addItem(input: ItemInput): Item
        updateItem(id: Int, input: ItemInput): Item
        deleteItem(id: Int): Item
    }

    type Item {
        id: Int,
        task: String,
        description: String
    }

    input ItemInput {
        task: String,
        description: String
    }
`);

module.exports = todoSchema;