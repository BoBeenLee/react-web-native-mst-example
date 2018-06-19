import { types } from "mobx-state-tree"

const Todo = types.model({
    name: types.string,
    done: types.optional(types.boolean, false)
})

export default Todo;
