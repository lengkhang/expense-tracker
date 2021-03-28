const INITIAL_STATE = {
  sampleUser: {}
};

const subjects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECEIVED_SUBJECTS':
      return {
        ...state,
        sampleUser: action.data.data[0]
      };

    default:
      return state;
  }
};

export default subjects;