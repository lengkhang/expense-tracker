export const addSubject = subjectsIndex => (
  {
    type: 'SELECT_SUBJECT',
    payload: subjectsIndex
  }
);

export const fetchAllSubjects = () => (
  {
    type: 'GET_ALL_SUBJECTS',
    payload: 'dunno'
  }
);