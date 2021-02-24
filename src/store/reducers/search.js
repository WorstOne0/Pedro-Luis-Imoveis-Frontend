const initialState = {
  typeSelected: null,
  citySelected: null,
  realStateSelected: null,
  districtSelected: [],
  sort: "-createdAt",
  spotlight: false,
  price: {
    min: 0,
    max: 1000000,
  },
  area: {
    min: 0,
    max: 2500,
  },
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return { ...state, ...action.search };
    default:
      return state;
  }
}
