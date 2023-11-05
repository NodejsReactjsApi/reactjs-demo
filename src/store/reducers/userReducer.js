const initialState = {
    userList: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER':
        return { ...state };
      case 'SET_USER':
        return { ...state, userList: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;