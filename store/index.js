import { types } from "mobx-state-tree";
import TodoStore from './TodoStore';

const Store = types.model({
    todoStore: TodoStore.create({ todos: [] })
});

export default Store;
