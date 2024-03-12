export const initialState = {
  favorites: [],
};

export const reducer = (state, { type, payload }) => {
  

  switch (type) {
    case "ADD_TO_FAVORITE":
      return { ...state, favorites: [...state.favorites, payload] };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites?.filter((item) => {
          return item.id !== payload;
        }),
      };

    default:
      return state;
  }
};
