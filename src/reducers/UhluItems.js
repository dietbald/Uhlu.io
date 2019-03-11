const UhluItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_UHLU_ITEM":
      return [action.payload.item, ...state];
    case "TOGGLE_UHLU_ITEM":
      return state.map(uhluItem =>
        uhluItem.id === action.id
          ? { ...uhluItem, checked: !uhluItem.checked }
          : uhluItem
      );

    case "REMOVE_UHLU_ITEM":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    default:
      return state;
  }
};

export default UhluItems;
