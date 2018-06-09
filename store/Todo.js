import { types } from "mobx-state-tree"

const Todo = types.model({
    name: types.string,
    done: types.optional(types.string, false)
})

export default Todo;
