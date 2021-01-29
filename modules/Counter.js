const SET_NUM = 'SET_NUM';

export const setNum = num => ({
  type: SET_NUM,
  num
});

const initialState = {
  num: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUM:
      return { ...state, num: action.num };
    default:
      return state;
  }
};

export default counterReducer;