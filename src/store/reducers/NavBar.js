const initialState = { isOpenNavBar: false };

const NavBar = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_NAVBAR":
      return { ...state, isOpenNavBar: !state.isOpenNavBar };

    default:
      return state;
  }
};

export default NavBar;
