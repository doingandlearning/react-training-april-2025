- Store: Holds the global store
- Action: Plain JS object => {type, payload}
- Reducer: A pure function `(state, action) => newState`
- Dispatch: Sends an action to the store to update the state
- Selector: Reads specific data from the store
- Slice: A modular piece of state + reducers + actions