import { types } from "mobx-state-tree";

const Store = types.model("Store", {
    name: "Hello"
});

export default Store;
