const INITIAL_STATE = {
  current: [],
  all_subjects: [
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
  ],
  sampleUser: {},
  all_users: { data: [{}]},
  loading: false
};
 
export default subjects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_SUBJECT':
      
      // copy the state 
      const { current,  all_subjects,} = state;
 
      //remove a subject from the all_subjects array
       
      const addedSubject = all_subjects.splice(action.payload, 1);
 
      // put subject in current array
      current.push(addedSubject);
 
      // update the redux state to reflect the change
      const newState = { current, all_subjects };
       
      //return new state
      // return newState;

      return {
        ...state,
        ...newState
      }

    case 'RECEIVED_SUBJECTS':  //REDUX-SAGA
      // console.log('==> action.data.data[0]:', action.data.data[0]);

      return {
        ...state,
        all_users: action.data,
        sampleUser: action.data.data[0],
        loading: false
      };
 
    default:
      return state
  }
};