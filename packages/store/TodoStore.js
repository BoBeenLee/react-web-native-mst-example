import { types } from "mobx-state-tree";
import Todo from './Todo';

const TodoStore = types.model({
    todos: types.optional(types.maybe(types.array(Todo)), [])
}).actions(self => {
    const add = (name) => {
        self.todos.push(Todo.create({ name: name }));
    }
    const remove = (name) => {
        const removeItem = self.todos.find((item) => {
            return item.name === name;
        });
        self.todos.remove(removeItem);
    }
});

export default TodoStore;
