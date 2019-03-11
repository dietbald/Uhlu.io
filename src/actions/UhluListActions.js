let nextTodoId = 0;
export const addUhluItem = item => ({
  type: "ADD_UHLU_ITEM",
  payload: { item, id: nextTodoId++ }
});

export const toggleUhluItem = id => ({
  type: "TOGGLE_UHLU_ITEM",
  payload: id
});

export const removeUhluItem = id => ({
    type: "REMOVE_UHLU_ITEM",
    payload: id
  });
  