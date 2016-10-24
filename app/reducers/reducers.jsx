export let recentUsersReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RECENT_USERS':
      return [
        ...state,
        ...action.recentUsers
      ];
    default:
      return state;
  }
}
