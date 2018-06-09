import { types } from "mobx-state-tree";
import { TodoStore } from './TodoStore';

const Store = types.model({
    todoStore: types.optional(TodoStore, {})
});

export default Store;
